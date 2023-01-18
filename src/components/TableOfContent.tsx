import { chakra, ListItem, OrderedList } from "@chakra-ui/react";
import React, { useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

export interface ContentHeader {
  level: number;
  id: string;
  title: string;
}

export interface TableOfContentProps {
  contentHeaders: ContentHeader[];
}

export default function TableOfContent(props: TableOfContentProps) {
  const activeId = useScrollSpy(
    props.contentHeaders.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: "-74px 0% -70% 0%",
      threshold: 1.0,
    }
  );
  return (
    <>
      <OrderedList spacing={1} ml="0" mt="4" styleType="none">
        {props.contentHeaders.map(({ level, id, title }) => (
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
    </>
  );
}
