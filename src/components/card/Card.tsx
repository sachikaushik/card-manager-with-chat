/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Card = ({ cardData }: any) => {
	return (
		<div className="overflow-hidden rounded-lg shadow-md hover:ring-1 hover:ring-blue-500 hover:ring-opacity-50 hover:shadow-2xl">
			<Link href={"/card/" + cardData.id}>
				<div className="aspect-w-1 aspect-h-1 p-4">
					<img src={cardData.imageUrl} alt={cardData.name || "Card Image"} className="object-cover w-full h-full" />
				</div>
				<div className="p-4">
					<h3 className="text-sm font-bold pb-2">{cardData.name}</h3>
					<p className="text-xs">{cardData.originalText}</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
