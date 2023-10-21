"use client";
import { useState, useEffect } from "react";
import extractData from "@/utils/extractData";
import storeFront from "../utils/getProducts";
import { extractedProduct } from "../utils/types";
import Image from "next/image";

export default function ProductList() {
	const [products, setProducts] = useState<extractedProduct[]>([]);

	const productsQuery: string = `query Products{
    products(first:6){
        edges{
            node{
                title,
                handle,
                priceRange{
                    minVariantPrice{
                        amount
                    }
                }
                images(first:1){
                    edges{
                        node{
                            transformedSrc
                            altText
                        }
                    }
                }
            }
        }
    }
  }`;

	useEffect(() => {
		async function getProducts() {
			const { data } = await storeFront(productsQuery);
			const extractedData: extractedProduct[] = extractData(data);
			setProducts(extractedData);
		}
		getProducts();
	}, [productsQuery]);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<a key={product.Handle} href="#" className="group">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<Image
									src={product.ImageURL}
									alt={product.AltText || ""}
									className="h-full w-full object-cover object-center group-hover:opacity-75"
                  width={1000}
                  height={1000}
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">
								{product.Title}
							</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">
								{product.Price}
							</p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
