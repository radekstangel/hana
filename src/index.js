// dependencies
import { Router } from "@reach/router";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// pages
import Ask from "pages/Ask";
import Jobs from "pages/Jobs";
import New from "pages/New";
import Show from "pages/Show";
import Top from "pages/Top";
// styles
import GlobalStyles from "styles/global";

const App = () => {
  const API = "https://node-hnapi.herokuapp.com/";
  return (
    <>
      <GlobalStyles />
      <Suspense fallback="Loading...">
        <Router>
          <Top api={API} path="/" />
          <New api={API} path="new" />
          <Show api={API} path="show" />
          <Jobs api={API} path="jobs" />
          <Ask api={API} path="ask" />
        </Router>
      </Suspense>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
