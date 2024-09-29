"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";

type Props = {
	children: React.ReactNode;
};

export const Provider = ({ children }: Props) => {
	return (
		<ChakraProvider value={defaultSystem}>
			<ThemeProvider
				attribute="class"
				disableTransitionOnChange
				defaultTheme="system"
			>
				<ViewTransitions>{children}</ViewTransitions>
			</ThemeProvider>
		</ChakraProvider>
	);
};
