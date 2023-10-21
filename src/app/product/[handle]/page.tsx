"use client";

export default function Product({ params }: { params: { handle: string } }) {
	const handle = params.handle;

	console.log(handle);

	return (
		<div className="text-2xl">
			<h1>{handle}</h1>
		</div>
	);
}