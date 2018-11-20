// dependencies
import GlobalStyles from "styles/global";
import React from "react";
import { Router } from "@reach/router";
// pages
import Ask from "pages/Ask";
import Jobs from "pages/Jobs";
import New from "pages/New";
import Show from "pages/Show";
import Top from "pages/Top";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Top path="/" />
        <New path="new" />
        <Show path="show" />
        <Ask path="ask" />
        <Jobs path="jobs" />
      </Router>
    </>
  );
};

export default App;
