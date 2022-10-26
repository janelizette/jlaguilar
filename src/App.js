import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage"
import Form from "./form/Form";

const anchors = ["Hi!", "About"]; // Dagdag ka isa dito pag dadagdag ka section, eto yung names sa gilid

const App = () => (
  <ReactFullpage
    // loopBottom={true}
    // loopTop={true}
    anchors={anchors}
    scrollingSpeed={1000}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#0c0c0c","#009182"]} // Dagdag ka isa dito pag dadagdag ka section, background colors to
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);
      return (
        <div>
          <div className="section"><Form/></div>
          <div className="section" style={{height:'100vh', width:'100vw'}}><p>Section</p></div>
        </div>
      );
    }}
  />
);

export default App;
