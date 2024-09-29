"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ViewTransitions } from "next-view-transitions";
import { ColorModeProvider } from "./color-mode";

export function Provider(props: React.PropsWithChildren) {
	return (
		<ViewTransitions>
			<ChakraProvider value={defaultSystem}>
				<ColorModeProvider>{props.children}</ColorModeProvider>
			</ChakraProvider>
		</ViewTransitions>
	);
}
