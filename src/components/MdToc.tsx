import { List, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface Props {
  content: string;
}

export default function MdToc({ content }: Props) {
  const [activeId, setActiveId] = useState("");
  useIntersectionObserver(setActiveId, content);

  const titles = content.split(`\n`).filter((t) => t.includes("# "));
  const result = titles
    .filter((str) => str[0] === "#")
    .map((item) => {
      // #의 갯수에 따라 제목의 크기가 달라지므로 갯수를 센다.
      let count = item.match(/#/g)?.length;
      if (count) {
        // 갯수에 따라 목차에 그릴때 들여쓰기 하기위해 *10을 함.
        count = count * 10;
      }

      // 제목의 내용물만 꺼내기 위해 '# '을 기준으로 나누고, 백틱과 공백을 없애주고 count와 묶어서 리턴
      return { title: item.split("# ")[1].replace(/`/g, "").trim(), count };
    });

  return (
    <div>
      <List>
        {result.map((item, idx) => {
          if (item?.count && item.count <= 30 && item?.title) {
            return <ListItem>{item.title}</ListItem>;
          }
        })}
      </List>
    </div>
  );
}
