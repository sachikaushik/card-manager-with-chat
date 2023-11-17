import React from "react";
import CardDetails from "@/components/cardDetails/CardDetails";

import NavBar from "@/components/nav-bar/NavBar";

export default function Page({ params }: any) {
	return (
		<>
			{/* <NavBar /> */}

			<CardDetails cardId={params.id} />
		</>
	);
}

// export default Page
