"use client";

import React from "react";
import Script from "next/script";
declare const window: any;
const HeadScripts = () => {
	const initBotPress = () => {
		window.botpressWebChat.init({
			composerPlaceholder: "Chat with bot",
			botConversationDescription: "This chatbot was built surprisingly fast with Botpress",
			botId: "f2c7f83f-0df1-4810-8823-3b8829fcac60",
			hostUrl: "https://cdn.botpress.cloud/webchat/v1",
			messagingUrl: "https://messaging.botpress.cloud",
			clientId: "f2c7f83f-0df1-4810-8823-3b8829fcac60",
			webhookId: "4b8564c3-aa3c-43c7-be31-370722584953",
			lazySocket: true,
			themeName: "prism",
			frontendVersion: "v1",
			showPoweredBy: true,
			theme: "prism",
			themeColor: "#2563eb",
		});
	};
	return (
		<Script
			src="https://cdn.botpress.cloud/webchat/v1/inject.js"
			onLoad={() => {
				initBotPress();
			}}
		/>
	);
};

export default HeadScripts;
