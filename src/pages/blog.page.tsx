import { useState } from "react";
import { Helmet } from "react-helmet-async";

export const Page = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>Computost Consulting - Blog</title>
      </Helmet>
      <h1>Blog</h1>
      <a onClick={() => setCount(count + 1)}>Count: {count}</a>
    </>
  );
};
