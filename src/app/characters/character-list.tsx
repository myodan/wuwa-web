"use client";

import { Grid, GridItem, HStack, Input, Select } from "@chakra-ui/react";
import { attributes, characters } from "@contents";
import { choseongIncludes } from "es-hangul";
import { useState } from "react";

import { CharacterCard } from "~/components/character-card";

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
                  <Select.Item key={attribute.id} item={attribute}>
                    <Select.ItemText>{attribute.name}</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
        </HStack>
      </GridItem>
      {characters
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => b.rarity - a.rarity)
        .filter(
          (character) =>
            (character.id.includes(searchTerm) ||
              character.name.includes(searchTerm) ||
              choseongIncludes(character.name, searchTerm)) &&
            (selectedAttributes.length
              ? selectedAttributes.includes(character.attribute)
              : true),
        )
        .map((character, index) => (
          <GridItem key={index}>
            <CharacterCard character={character} />
          </GridItem>
        ))}
    </Grid>
  );
};
