import React from "react";

const Story = params => {
  return (
    <li key={params.id}>
      <a href={params.url}>{params.title}</a>
      <br />
      {params.comments_count} comments | {params.points} points by {params.user}{" "}
      , {params.time_ago}
    </li>
  );
};

export default Story;
