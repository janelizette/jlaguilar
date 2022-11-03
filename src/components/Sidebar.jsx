import React from "react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import Boop from "./Boop";
import SidebarCSS from "../styles/Sidebar.module.css";

function Sidebar() {
  return (
    <div className={SidebarCSS.sidebar}>
      <ul className={SidebarCSS.ul}>
        <li className={SidebarCSS.li}>
          <a
            href="https://github.com/janelizette"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Boop rotation={50} timing={150}>
              <FiGithub size={20} className={SidebarCSS.icon} />
            </Boop>
          </a>
        </li>
        <li className={SidebarCSS.li}>
          <a
            href="https://www.linkedin.com/in/janelizetteaguilar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Boop rotation={50} timing={150}>
              <FiLinkedin size={20} className={SidebarCSS.icon} />
            </Boop>
          </a>
        </li>
        <li className={SidebarCSS.li}>
          <a
            href="https://facebook.com/jnlzt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Boop rotation={50} timing={150}>
              <FiFacebook size={20} className={SidebarCSS.icon} />
            </Boop>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
