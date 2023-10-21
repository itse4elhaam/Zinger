import { extractedProduct, Product } from "./types";

export default function extractData(jsonData: any): extractedProduct[] {
	const products: Product[] = jsonData.products.edges;

	const extractedData: extractedProduct[] = products.map((product) => {
		const { title, handle, priceRange, images } = product.node;
		const { amount } = priceRange.minVariantPrice;
		const { transformedSrc, altText } = images.edges[0].node;

		return {
			Title: title,
			Handle: handle,
			Price: amount,
			ImageURL: transformedSrc,
			AltText: altText || "N/A",
		};
	});

	return extractedData;
}

