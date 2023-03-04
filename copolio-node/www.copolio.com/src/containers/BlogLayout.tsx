import { Box, Container } from "@chakra-ui/react";
import React from "react";
import MarkdownContent from "../components/MarkdownContent";
import BlogHeader from "./BlogHeader";

export default function BlogLayout({ content }: { content: string }) {
  return (
    <>
      <BlogHeader />
      {/* <Container minWidth="max-content" alignItems="center" mt="10%"> */}
      <MarkdownContent content={content} />
      {/* </Container> */}

      <Box height={1000}></Box>
    </>
  );
}
