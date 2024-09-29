"use client";

import type { IconButtonProps } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { forwardRef } from "react";

export function ColorModeProvider(props: ThemeProviderProps) {
	return (
		<ThemeProvider attribute="class" disableTransitionOnChange {...props} />
	);
}

export function useColorMode() {
	const { resolvedTheme, setTheme } = useTheme();
	const toggleColorMode = () => {
		setTheme(resolvedTheme === "light" ? "dark" : "light");
	};
	return {
		colorMode: resolvedTheme,
		setColorMode: setTheme,
		toggleColorMode,
	};
}

export function useColorModeValue<T>(light: T, dark: T) {
	const { colorMode } = useColorMode();
	return colorMode === "light" ? light : dark;
}

export function ColorModeIcon() {
	const { colorMode } = useColorMode();
	return colorMode === "light" ? <IconMoon /> : <IconSun />;
}

export const ColorModeButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	function ColorModeButton(props, ref) {
		const { toggleColorMode } = useColorMode();
		return (
			<ClientOnly fallback={<Skeleton boxSize="10" />}>
				<IconButton
					onClick={toggleColorMode}
					variant="ghost"
					ref={ref}
					{...props}
				>
					<ColorModeIcon />
				</IconButton>
			</ClientOnly>
		);
	},
);
