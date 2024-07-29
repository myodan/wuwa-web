import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { characters } from "@contents";
import { type Metadata } from "next";

import { CharacterCard } from "~/components/character-card";

import { CharacterList } from "./character-list";

export const metadata: Metadata = {
  title: "공명자 | WuWa",
  description: "",
};

const Home = () => {
  return (
    <Container
      display={"flex"}
      maxWidth={"container.xl"}
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
