import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Introduction from "./components/Introduction";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";
import Sidebar from "./components/Sidebar";

import "./App.css";

const anchors = ["Hi!", "About", "Contact"];

const App = () => (
  <div>
    <ReactFullpage
      anchors={anchors}
      scrollingSpeed={1000}
      navigation
      navigationTooltips={anchors}
      sectionsColor={["#202020", "#202020", "#202020"]}
      onLeave={(origin, destination, direction) => {
        // console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        // console.log("render prop change", state, fullpageApi);
        return (
          <div>
            <div
              className="section"
              // style={{ width: "100vw", height: "100vh" }}
            >
              <Introduction />
            </div>
            <div
              className="section"
              // style={{ width: "100vw", height: "100vh" }}
            >
              <Education />
            </div>
            <div
              className="section"
              // style={{ width: "100vw", height: "100vh" }}
            >
              <ContactMe />
            </div>
          </div>
        );
      }}
    />

    <Sidebar />
  </div>
);

export default App;
