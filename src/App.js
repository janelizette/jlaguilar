import ReactFullpage from "@fullpage/react-fullpage";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

import Introduction from "./components/Introduction";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";
import Sidebar from "./styles/Sidebar.module.css";
import "./App.css";

const anchors = ["Hi!", "About", "Contact"]; // Dagdag ka isa dito pag dadagdag ka section, eto yung names sa gilid

const App = () => (
  <div>
    <ReactFullpage
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
            <div
              className="section"
              style={{ width: "100vw", height: "100vh" }}
            >
              <Introduction />
            </div>
            <div
              className="section"
              style={{ width: "100vw", height: "100vh" }}
            >
              <Education />
            </div>
            <div
              className="section"
              style={{ width: "100vw", height: "100vh" }}
            >
              <ContactMe />
            </div>
          </div>
        );
      }}
    />

    {/* Sidebar */}
    <div className={Sidebar.sidebar}>
      <ul className={Sidebar.ul}>
        <li className={Sidebar.li}>
          <a
            href="https://github.com/janelizette"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub color="#f7f4f3" size={20} />
          </a>
        </li>
        <li className={Sidebar.li}>
          {" "}
          <a
            href="https://www.linkedin.com/in/janelizetteaguilar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin color="#f7f4f3" size={20} />
          </a>
        </li>
        <li className={Sidebar.li}>
          <a
            href="https://facebook.com/jnlzt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook color="#f7f4f3" size={20} />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default App;
