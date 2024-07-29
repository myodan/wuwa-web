"use client";

import {
  Box,
  Card,
  type CardRootProps,
  Float,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { attributes, type Character } from "@contents";
import Image from "next/image";
import NextLink from "next/link";

type Props = CardRootProps & {
  character: Character;
};

export const CharacterCard = ({ character, ...rest }: Props) => {
  const attribute = attributes.find((attr) => attr.id === character.attribute);
  return (
    <NextLink href={`/characters/${character.id}`}>
      <Card.Root width={"full"} background={"bg"} {...rest}>
        <Card.Body padding={"2"}>
          <VStack>
            <Box
              position="relative"
              overflow={"hidden"}
              rounded={"sm"}
              backgroundGradient={"to-r"}
              gradientFrom={
                character.rarity === 5 ? "yellow.400" : "purple.400"
              }
              gradientTo={character.rarity === 5 ? "orange.400" : "purple.600"}
            >
              <Box
                asChild
                transition={"all 0.5s"}
                _hover={{
                  scale: "1.05",
                }}
              >
                <Image
                  src={character.portrait.src}
                  width={character.portrait.width}
                  height={character.portrait.height}
                  alt={"portrait"}
                />
              </Box>
              <Float placement={"top-start"} offset={"6"} boxSize={"10"}>
                {attribute && (
                  <Image
                    src={attribute.icon.src}
                    width={attribute.icon.width}
                    height={attribute.icon.height}
                    alt="attribute"
                  />
                )}
              </Float>
            </Box>
            <Heading userSelect={"none"}>{character.name}</Heading>
          </VStack>
        </Card.Body>
      </Card.Root>
    </NextLink>
  );
};
