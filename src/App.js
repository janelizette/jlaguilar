import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Landing from "./components/Landing";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";

const anchors = ["Hi!", "About"]; // Dagdag ka isa dito pag dadagdag ka section, eto yung names sa gilid

const App = () => (
  <ReactFullpage
    // loopBottom={true}
    // loopTop={true}
    anchors={anchors}
    scrollingSpeed={1000}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#202020", "#202020"]} // Dagdag ka isa dito pag dadagdag ka section, background colors to
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);
      return (
        <div>
          <div className="section">
            <Landing />
          </div>
          <div className="section" style={{ height: "100vh", width: "100vw" }}>
            <Education />
          </div>
        </div>
      );
    }}
  />
);

export default App;
