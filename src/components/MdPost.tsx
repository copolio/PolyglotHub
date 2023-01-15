import React from "react";
import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/cjs/styles/hljs/docco";
// import lightCss from "github-markdown-css/github-markdown-light.css";
// import darkCss from "github-markdown-css/github-markdown-dark.css";
import "github-markdown-css";
import { Box, useColorMode } from "@chakra-ui/react";

export default function MdPost(props: { content: string }) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box className="markdown-body" padding={10}>
        {/* <style>{colorMode === "light" ? lightCss : darkCss}</style> */}
        <ReactMarkdown
          children={props.content}
          components={{
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
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </Box>
    </>
  );
}
