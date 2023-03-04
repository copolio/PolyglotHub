import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs/docco";
// import "github-markdown-css";
import {
  Box,
  Code,
  Container,
  HeadingProps,
  useColorMode,
} from "@chakra-ui/react";
import TableOfContent from "./TableOfContent";
import ScrollProgress from "./ScrollProgress";

export default function MarkdownContent(props: { content: string }) {
  const { colorMode } = useColorMode();
  const [titles, setTitles] = useState([]);
  const [mdStyle, setMdStyle] = useState();

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
      <Box position="fixed">
        <ScrollProgress />
      </Box>
      {colorMode === "light" ? (
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.css"
          integrity="sha512-1d9gwwC3dNW3O+lGwY8zTQrh08a41Ejci46DdzY1aQbqi/7Qr8Asp4ycWPsoD52tKXKrgu8h/lSpig1aAkvlMw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      ) : (
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-dark.css"
          integrity="sha512-q0UqxA0Ka1VxVBMFJoNfTVBYFWXqkNeF1N6WZPyLNULkF9YdpAuS/dqsN3/ClxBUzHJGrrkgLJFUlzFgXunXDQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      )}
      <TableOfContent contentHeaders={titles} />
      <Container
        alignItems="center"
        maxW="container.lg"
        minW="min-content"
        mt="10%"
      >
        <ReactMarkdown
          className="markdown-body"
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
                  language={match[1]}
                  style={docco}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <SyntaxHighlighter language="textile" PreTag="div" {...props}>
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            },
          }}
        >
          {props.content}
        </ReactMarkdown>
      </Container>
    </>
  );
}
