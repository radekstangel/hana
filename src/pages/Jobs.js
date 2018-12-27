// dependencies
import React from "react";
import useFetch from "fetch-suspense";

const Jobs = () => {
  const data = useFetch("http://node-hnapi.herokuapp.com/jobs?page=1");
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

export default Jobs;
