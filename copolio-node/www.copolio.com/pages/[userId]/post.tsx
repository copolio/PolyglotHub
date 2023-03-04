import React from "react";
import BlogLayout from "../../src/containers/BlogLayout";

function blog({ content }: { content: string }) {
  return <BlogLayout content={content}></BlogLayout>;
}

blog.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/sample.md");
  const resData = await res.text();

  return { content: resData };
};

export default blog;
