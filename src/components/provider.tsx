"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

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
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};
