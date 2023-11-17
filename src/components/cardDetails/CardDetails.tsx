/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import axios from "axios";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}
const CardDetails = ({ cardId }: any) => {
	const [cardData, setCardData] = useState<any>();
	const [isLoadin, setIsLoading] = useState(false);
	const fetchData = async () => {
		const data = await axios.get("https://api.magicthegathering.io/v1/cards/" + cardId);
		console.log(data.data.card);
		setCardData(data.data.card);
		setIsLoading(true);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			{isLoadin ? (
				<div className="bg-white">
					{/* <a href="/">Go back</a> */}
					<div className="pt-6">
						<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
							<div className="aspect-h-3 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
								<img src={cardData.imageUrl} alt="card image..." height={100} width={100} className="h-full w-full object-cover object-center" />
							</div>
						</div>
						<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
							<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
								<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{cardData.name}</h1>
							</div>
							<div className="mt-4 lg:row-span-3 lg:mt-0">
								<h2 className="sr-only">Product information</h2>
								<p className="text-3xl tracking-tight text-gray-900">{cardData.artist}</p>

								<div className="mt-6">
									<h3 className="sr-only">Reviews</h3>
									<div className="flex items-center">
										<div className="flex items-center">
											{[0, 1, 2, 3, 4].map((rating) => (
												<StarIcon key={rating} className={classNames(cardData.toughness > rating ? "text-gray-900" : "text-gray-200", "h-5 w-5 flex-shrink-0")} aria-hidden="true" />
											))}
										</div>
										<p className="sr-only">{cardData.toughness} out of 5 stars</p>
										<p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{cardData.toughness} toughness</p>
									</div>
								</div>

								<div className="mt-10"></div>
							</div>

							<div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
								<div>
									<h3 className="sr-only">Description</h3>

									<div className="space-y-6">
										<p className="text-base text-gray-900">{cardData.text}</p>
										<p className="text-base text-gray-900">{cardData.flavor}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<>Loading...</>
			)}
		</div>
	);
};

export default CardDetails;
