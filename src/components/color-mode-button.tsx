"use client";

import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export const ColorModeButton = () => {
	const { theme, setTheme } = useTheme();

	const handleClick = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<ClientOnly fallback={<Skeleton boxSize="10" />}>
			<IconButton
				onClick={handleClick}
				variant="ghost"
				aria-label="Color Mode Toggle Button"
			>
				{theme === "light" ? <IconSun /> : <IconMoon />}
			</IconButton>
		</ClientOnly>
	);
};
