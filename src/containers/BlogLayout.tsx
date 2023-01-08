import {
  Box,
  Button,
  Container,
  useColorMode,
  useColorModeValue,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import MarkdownPost from "../components/MarkdownPost";
import BlogHeader from "./BlogHeader";

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
      <BlogHeader />
      <Container maxW="container.md">
        <MarkdownPost markdown={markdown} />
      </Container>
    </VStack>
  );
}
