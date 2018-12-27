import PageNav from "components/PageNav";
import React from "react";
import Story from "components/Story";
import useFetch from "fetch-suspense";

const Top = props => {
  const pageCounter = 1;
  const data = useFetch(props.api + "news?page=" + pageCounter);
  return (
    <>
      <ol>
        {data.map(i => (
          <Story
            comments_count={i.comments_count}
            id={i.id}
            points={i.points}
            time_ago={i.time_ago}
            title={i.title}
            url={i.url}
            user={i.user}
          />
        ))}
      </ol>
      <PageNav />
    </>
  );
};

export default Top;
