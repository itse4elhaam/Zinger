export interface Product {
	node: {
		title: string;
		handle: string;
		priceRange: {
			minVariantPrice: {
				amount: string;
			};
		};
		images: {
			edges: {
				node: {
					transformedSrc: string;
					altText: string | null;
				};
			}[];
		};
	};
}

export interface extractedProduct {
        Title: string;
        Handle: string;
        Price: string;
        ImageURL: string;
        AltText: string;
}