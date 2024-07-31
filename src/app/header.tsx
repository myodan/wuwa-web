import { Button, Container, Flex, Heading, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

import { ColorModeButton } from "~/components/color-mode-button";

export const Header = () => {
  return (
    <Flex as={"header"} height={"16"} alignItems={"center"} background={"bg"}>
      <Container maxWidth={"container.xl"}>
        <HStack justifyContent={"space-between"} gap={"4"}>
          <Heading>WuWa</Heading>
          <HStack flex={"1"} gap={"2"}>
            <Button variant="ghost" asChild>
              <NextLink href={"/"}>홈</NextLink>
            </Button>
            <Button variant="ghost" asChild>
              <NextLink href={"/characters"}>공명자</NextLink>
            </Button>
          </HStack>
          <ColorModeButton />
        </HStack>
      </Container>
    </Flex>
  );
};
