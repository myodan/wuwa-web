import { Code, Container, Heading } from "@chakra-ui/react";
import { characters } from "@contents";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({
  params: { id },
}: Props): Metadata | void => {
  const character = characters.find((char) => char.id === id);

  if (!character) {
    return;
  }

  return {
    title: `${character.name} | WuWa`,
  };
};

export const generateStaticParams = () => {
  return characters.map((character) => ({
    id: character.id,
  }));
};

const Home = ({ params: { id } }: Props) => {
  const character = characters.find((char) => char.id === id);

  if (!character) {
    return notFound();
  }

  return (
    <Container
      display={"flex"}
      maxWidth={"container.xl"}
      paddingTop={"4"}
      flexDirection={"column"}
      gap={"4"}
    >
      <Heading fontSize={"3xl"}>캐릭터 정보</Heading>
      <Code
        as={"pre"}
        fontSize={"xl"}
        overflow={"scroll"}
        scrollbarWidth={"none"}
        padding={"4"}
      >
        {character && JSON.stringify(character, null, 2)}
      </Code>
    </Container>
  );
};

export default Home;
