"use client";

import {
  Avatar,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { choseongIncludes } from "es-hangul";
import { useState } from "react";

import { attributes, characters } from "#contents";

import { CharacterCard } from "./character-card";

export const CharacterList = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);

  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        sm: "repeat(3, 1fr)",
        md: "repeat(4, 1fr)",
        lg: "repeat(5, 1fr)",
        xl: "repeat(6, 1fr)",
      }}
      gap={"4"}
    >
      <GridItem
        colSpan={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
        }}
      >
        <Input
          placeholder="검색어를 입력하세요"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </GridItem>
      <GridItem>
        <HStack>
          <Select.Root
            items={attributes}
            itemToString={(item) => item.name}
            itemToValue={(item) => item.id}
            value={selectedAttributes}
            onValueChange={(event) => setSelectedAttributes(event.value)}
            multiple
          >
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="속성" />
                <Select.Indicator />
              </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                {attributes.map((attribute) => (
                  <Select.Item
                    item={attribute}
                    key={attribute.id}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Avatar.Root size="xs">
                      <Avatar.Fallback>{attribute.name}</Avatar.Fallback>
                      <Avatar.Image
                        src={attribute.icon.src}
                        alt={attribute.name}
                      />
                    </Avatar.Root>
                    <Text flex={"1"}>{attribute.name}</Text>
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
        </HStack>
      </GridItem>
      {characters
        .filter(
          (character) =>
            (character.id.includes(searchTerm) ||
              character.name.includes(searchTerm) ||
              choseongIncludes(character.name, searchTerm)) &&
            (selectedAttributes.length
              ? selectedAttributes.includes(character.attribute)
              : true),
        )
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => b.rarity - a.rarity)
        .map((character) => (
          <GridItem key={character.id}>
            <CharacterCard character={character} />
          </GridItem>
        ))}
    </Grid>
  );
};
