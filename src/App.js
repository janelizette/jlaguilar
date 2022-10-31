import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";

import Introduction from "./components/Introduction";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";

const anchors = ["Hi!", "About", "Contact"]; // Dagdag ka isa dito pag dadagdag ka section, eto yung names sa gilid

const App = () => (
  <ReactFullpage
    // loopBottom={true}
    // loopTop={true}
    anchors={anchors}
    scrollingSpeed={1000}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#202020", "#202020", "#202020"]} // Dagdag ka isa dito pag dadagdag ka section, background colors to
    onLeave={(origin, destination, direction) => {
      // console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      // console.log("render prop change", state, fullpageApi);
      return (
        <div>
          <div className="section" style={{ width: "100vw", height: "100vh" }}>
            <Introduction />
          </div>
          <div className="section" style={{ width: "100vw", height: "100vh" }}>
            <Education />
          </div>
          <div className="section" style={{ width: "100vw", height: "100vh" }}>
            <ContactMe />
          </div>
        </div>
      );
    }}
  />
);

export default App;
