// dependencies
import React from "react";
import useFetch from "fetch-suspense";

const Ask = props => {
  const pageCounter = 1;
  const data = useFetch(props.api + "ask?page=" + pageCounter);
  return (
    <>
      <ol>
        {data.map(i => (
          <li key={i.id}>
            <a href={i.url}>{i.title}</a>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Ask;
