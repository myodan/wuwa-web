import { Container, Heading } from "@chakra-ui/react";
import type { Metadata } from "next";

import { CharacterList } from "./character-list";

export const metadata: Metadata = {
	title: "공명자 | WuWa",
	description: "",
};

const Home = () => {
	return (
		<Container
			display={"flex"}
			maxWidth={"7xl"}
			paddingTop={"4"}
			flexDirection={"column"}
			gap={"4"}
		>
			<Heading fontSize={"3xl"}>공명자 목록</Heading>
			<CharacterList />
		</Container>
	);
};

export default Home;
