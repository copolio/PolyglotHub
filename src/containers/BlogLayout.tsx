import { Box, Container, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import MdPost from "../components/MdPost";
import MdToc from "../components/MdToc";
import BlogHeader from "./BlogHeader";

export default function BlogLayout({ content }: { content: string }) {
  return (
    <VStack>
      <BlogHeader />
      <Stack direction={["column", "row"]}>
        <Container maxW="container.md">
          <MdPost content={content} />
        </Container>
        <MdToc content={content} />
      </Stack>
    </VStack>
  );
}
