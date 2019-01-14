import React from "react";
import StoryItem from "components/StoryItem";
import useFetch from "fetch-suspense";

const Top = props => {
  const pageCounter = 1;
  const data = useFetch(props.api + "comments?page=" + pageCounter);
  return (
    <ol>
      {data.map(i => (
        <StoryItem id={i.id} url={i.url} title={i.title} />
      ))}
    </ol>
  );
};

export default Top;
