import React from "react";
import StoryItem from "components/StoryItem";
import useFetch from "fetch-suspense";

const Top = props => {
  const pageCounter = 1;
  const data = useFetch(props.api + "news?page=" + pageCounter);
  return (
    <ol>
      {data.map(item => (
        <StoryItem id={item.id} url={item.url} title={item.title} />
      ))}
    </ol>
  );
};

export default Top;
