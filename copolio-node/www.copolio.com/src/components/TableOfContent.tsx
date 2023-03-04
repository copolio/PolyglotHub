import React, { useEffect, useState } from "react";
import { Box, chakra, ListItem, OrderedList } from "@chakra-ui/react";
import { useScrollSpy } from "../hooks/useScrollSpy";

export interface ContentHeader {
  level: number;
  id: string;
  title: string;
}

export interface TableOfContentProps {
  contentHeaders: ContentHeader[];
}

export default function TableOfContent({
  contentHeaders,
}: TableOfContentProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const activeId = useScrollSpy(
    contentHeaders.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: "0% 0% -60% 0%",
    }
  );
  return (
    <Box
      as="nav"
      aria-labelledby="toc-title"
      width="16rem"
      flexShrink={0}
      display={{ base: "none", xl: "block" }}
      position={scrollPosition < 30 && activeId !== null ? "absolute" : "fixed"}
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
      <OrderedList spacing={1} ml="0" mt="4" styleType="none">
        {contentHeaders.map(({ level, id, title }) => (
          <ListItem key={id} title={title} ml={level}>
            <chakra.a
              py="1"
              display="block"
              fontWeight={id === activeId ? "bold" : "medium"}
              fontSize={id === activeId ? "large" : "medium"}
              href={`#${id}`}
              aria-current={id === activeId ? "location" : undefined}
            >
              {title}
            </chakra.a>
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  );
}
