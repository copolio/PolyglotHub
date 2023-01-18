import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/cjs/styles/hljs/docco";
// import lightCss from "github-markdown-css/github-markdown-light.css";
// import darkCss from "github-markdown-css/github-markdown-dark.css";
import "github-markdown-css";
import { Box, Code, Flex, HeadingProps, useColorMode } from "@chakra-ui/react";
import TableOfContent from "./TableOfContent";

export default function MarkdownPost(props: { content: string }) {
  const { colorMode } = useColorMode();
  const [titles, setTitles] = useState([]);

  // Magic.
  const addToTitles = ({
    children,
    ...props
  }: React.PropsWithChildren<HeadingProps>) => {
    const level = Number(props.node.tagName.match(/h(\d)/)?.slice(1));
    if (level && children && typeof children[0] === "string") {
      const id = children[0].toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const newTitle = {
        level,
        id,
        title: children[0],
      };
      if (!titles.find((title) => title.id === newTitle.id)) {
        setTitles([newTitle, ...titles]);
      }
      return React.createElement(props.node.tagName, { id }, children);
    } else {
      return React.createElement(props.node.tagName, props, children);
    }
  };

  return (
    <>
      <Flex>
        <Box id="markdown-body" className="markdown-body" padding={10}>
          {/* <style>{colorMode === "light" ? lightCss : darkCss}</style> */}
          <ReactMarkdown
            components={{
              h1: addToTitles,
              h2: addToTitles,
              h3: addToTitles,
              h4: addToTitles,
              h5: addToTitles,
              h6: addToTitles,
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={docco}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <Code className={className} {...props}>
                    {children}
                  </Code>
                );
              },
            }}
          >
            {props.content}
          </ReactMarkdown>
        </Box>
        <Box
          as="nav"
          aria-labelledby="toc-title"
          width="16rem"
          flexShrink={0}
          display={{ base: "none", xl: "block" }}
          position="fixed"
          py="10"
          pr="4"
          top="6rem"
          right="0"
          fontSize="sm"
          alignSelf="start"
          maxHeight="calc(100vh - 8rem)"
          overflowY="auto"
          sx={{ overscrollBehavior: "contain" }}
        >
          <TableOfContent contentHeaders={titles} />
        </Box>
      </Flex>
    </>
  );
}
