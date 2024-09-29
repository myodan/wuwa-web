"use client";

import { Grid, GridItem, HStack, Input, Text } from "@chakra-ui/react";
import { getChoseong } from "es-hangul";
import { useState } from "react";

import { attributes, characters } from "#contents";
import { Avatar } from "~/components/ui/avatar";
import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from "~/components/ui/select";

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
					<SelectRoot
						items={attributes}
						itemToString={(item) => item.name}
						itemToValue={(item) => item.id}
						value={selectedAttributes}
						onValueChange={(event) => setSelectedAttributes(event.value)}
						multiple
					>
						<SelectTrigger>
							<SelectValueText placeholder="속성" />
						</SelectTrigger>
						<SelectContent>
							{attributes.map((attribute) => (
								<SelectItem
									item={attribute}
									key={attribute.id}
									alignItems={"center"}
									justifyContent={"space-between"}
								>
									<Avatar
										name={attribute.name}
										src={attribute.icon.src}
										size={"xs"}
									/>
									<Text flex={"1"}>{attribute.name}</Text>
								</SelectItem>
							))}
						</SelectContent>
					</SelectRoot>
				</HStack>
			</GridItem>
			{characters
				.filter(
					(character) =>
						(character.id.includes(searchTerm) ||
							character.name.includes(searchTerm) ||
							getChoseong(character.name).includes(searchTerm)) &&
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
