import React from "react";
import { GoChevronDown } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/Landing.css";
import Intro from "../styles/Intro.module.css";

const bounceTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

function Introduction() {
  return (
    <div className={Intro.main}>
      <header className={Intro.container}>
        <h3 className={Intro.heading3}>Hi, I'm</h3>
        <h1 className={Intro.heading1}>Jane Lizette Aguilar.</h1>
        <h2 className={Intro.heading2}>I'm a computer engineer.</h2>

        <motion.div
          className={Intro.down}
          transition={bounceTransition}
          animate={{
            y: ["0%", "-20%"],
          }}
        >
          <GoChevronDown color="#ffee32" size={80} />
        </motion.div>
      </header>

      {/* <footer>
        <p>Designed and built by Jane Lizette Aguilar</p>
      </footer> */}
    </div>
  );
}

export default Introduction;
