import { Box, Container, VStack } from "@chakra-ui/react";
import React from "react";
import MarkdownPost from "../MarkdownPost";

const markdown = `
# Lorem ipsum dolor
- Lorem ipsum dolor sit amet consectetur adipisicing elit.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nesciunt dolor, earum architecto temporibus neque consectetur accusamus iusto ratione corporis. Molestiae alias distinctio cupiditate nostrum, delectus minus maxime ea error.

~~~java
import java.util.*;

public static void main() {
  println("hello world");
}
~~~
`;

export default function BlogLayout() {
  return (
    <VStack>
      <Box bg="green" w="100%" p={6} color="white">
        <Container maxW="container.2xl">copolio</Container>
      </Box>
      <Container maxW="container.md">
        <MarkdownPost markdown={markdown} />
      </Container>
    </VStack>
  );
}
