import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { IconBrandGithub } from "@tabler/icons-react";
import { Link as NextLink } from "next-view-transitions";
import React from "react";

import { ColorModeButton } from "~/components/color-mode-button";

export const Header = () => {
  return (
    <Flex as={"header"} height={"16"} alignItems={"center"} background={"bg"}>
      <Container maxWidth={"7xl"}>
        <HStack justifyContent={"space-between"} gap={"4"}>
          <Heading>
            <NextLink href={"/"}>WuWa</NextLink>
          </Heading>
          <HStack flex={"1"} gap={"2"}>
            <Button variant={"ghost"} asChild>
              <NextLink href={"/"}>홈</NextLink>
            </Button>
            <Button variant={"ghost"} asChild>
              <NextLink href={"/characters"}>공명자</NextLink>
            </Button>
          </HStack>
          <HStack>
            <ColorModeButton />
            <IconButton variant={"ghost"} aria-label={`Github Link`} asChild>
              <Link href={"https://github.com/myodan/wuwa-web"} target="_blank">
                <IconBrandGithub />
              </Link>
            </IconButton>
          </HStack>
        </HStack>
      </Container>
    </Flex>
  );
};
