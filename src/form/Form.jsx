import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiChevronDown,
} from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import "./Form.css";

function Form() {
  return (
    <div className="main">
      <header>
        <h3>Hi, I'm</h3>
        <h1>Jane Lizette Aguilar.</h1>
        <h2>I'm a web developer.</h2>
        {/* <p>I graduated with a degree in Computer Engineering the Polytechnic University of the Philippines. </p> */}

        <a href="#about">
          <AiOutlineDown color="#ffd100" size={150} />
        </a>

        {/* <ul>
          <li>
            <a href="#email">E-mail</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1YdW8TPrgiIcE_Yd7qKTrAYWizPkNrhl4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul> */}
      </header>

      <div className="sidebar">
        <ul>
          <li>
            <a
              href="https://github.com/janelizette"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub color="#f7f4f3" size={20} />
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/janelizetteaguilar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin color="#f7f4f3" size={20} />
            </a>
          </li>
          <li>
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

      <footer>
        <p>Designed and built by Jane Lizette Aguilar</p>
      </footer>
    </div>
  );
}

export default Form;
