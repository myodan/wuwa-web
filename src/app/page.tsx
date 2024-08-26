import { Container, Heading } from "@chakra-ui/react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "홈 | WuWa",
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
      <Heading fontSize={"3xl"}>홈</Heading>
    </Container>
  );
};

export default Home;
