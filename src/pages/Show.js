// dependencies
import React from "react";
import useFetch from "fetch-suspense";

const Show = props => {
  const pageCounter = 1;
  const data = useFetch(props.api + "show?page=" + pageCounter);
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

export default Show;
