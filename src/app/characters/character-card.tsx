"use client";

import {
  Box,
  Card,
  type CardRootProps,
  Float,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { Link as NextLink } from "next-view-transitions";

import { attributes, type Character } from "#contents";

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
                character.rarity === 5 ? "orange.400" : "purple.600"
              }
              gradientTo={character.rarity === 5 ? "yellow.400" : "purple.400"}
            >
              <Image
                transition={"all 0.5s"}
                _hover={{
                  scale: "1.05",
                }}
                asChild
              >
                <NextImage
                  src={character.portrait.src}
                  width={character.portrait.width}
                  height={character.portrait.height}
                  blurDataURL={character.portrait.blurDataURL}
                  placeholder={"blur"}
                  alt={"portrait"}
                />
              </Image>
              <Float placement={"top-start"} offset={"6"} boxSize={"12"}>
                {attribute && (
                  <Image asChild>
                    <NextImage
                      src={attribute.icon.src}
                      width={attribute.icon.width}
                      height={attribute.icon.height}
                      blurDataURL={attribute.icon.blurDataURL}
                      placeholder={"blur"}
                      alt="attribute"
                    />
                  </Image>
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
