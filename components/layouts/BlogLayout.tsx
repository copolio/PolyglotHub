import { Box, Container, Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const markdown = `
# Lorem ipsum

> Lorem ipsum

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
Consequuntur voluptates cupiditate, facilis magni illo tempore molestias aliquid temporibus voluptatum expedita nesciunt modi quaerat nulla ipsa ex corrupti dolor quas nobis.
`;

export default function BlogLayout() {
  return (
    <VStack>
      <Box bg="green" w="100%" p={6} color="white">
        <Container maxW="container.2xl">copolio</Container>
      </Box>
      <Container maxW="container.md"></Container>
    </VStack>
  );
}
