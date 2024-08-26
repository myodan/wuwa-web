import { Container, DataList, Heading, HStack, Image } from "@chakra-ui/react";
import { type Metadata } from "next";
import NextImage from "next/image";
import { notFound } from "next/navigation";

import { characters } from "#contents";

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
      maxWidth={"7xl"}
      paddingTop={"4"}
      flexDirection={"column"}
      gap={"4"}
    >
      <Heading fontSize={"3xl"}>캐릭터 정보</Heading>
      <HStack justifyContent={"space-between"}>
        <DataList.Root orientation="horizontal">
          {Object.entries(character)
            .filter((item) => typeof item[1] !== "object")
            .map((item) => (
              <DataList.Item key={item[0]}>
                <DataList.ItemLabel>{item[0]}</DataList.ItemLabel>
                <DataList.ItemValue as={"pre"}>
                  {item[1] as string}
                </DataList.ItemValue>
              </DataList.Item>
            ))}
        </DataList.Root>
        <Image maxWidth={"xl"} asChild>
          <NextImage
            src={character.fullbody.src}
            height={character.fullbody.height}
            width={character.fullbody.width}
            alt={"fullbody"}
          />
        </Image>
      </HStack>
    </Container>
  );
};

export default Home;
