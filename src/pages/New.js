// dependencies
import React from "react";
import useFetch from "fetch-suspense";

const New = () => {
  const data = useFetch("http://node-hnapi.herokuapp.com/newest?page=1");
  return (
    <>
      <ol>
        {data.map(item => (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ol>
    </>
  );
};

export default New;
