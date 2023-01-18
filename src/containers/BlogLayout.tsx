import { Box, Container, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import MarkdownPost from "../components/MarkdownContent";
import TableOfContent from "../components/TableOfContent";
import BlogHeader from "./BlogHeader";
import remarkToc from "remark-toc";

export default function BlogLayout({ content }: { content: string }) {
  return (
    <Box>
      <BlogHeader />
      <Box minWidth="max-content" alignItems="center" mt="20%">
        <Container maxW="container.lg">
          <MarkdownPost content={content} />
        </Container>
      </Box>

      <Box></Box>
    </Box>
  );
}
