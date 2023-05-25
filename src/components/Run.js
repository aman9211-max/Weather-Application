import React from "react";
import "./Run.css";
import { motion } from "framer-motion";

const Run = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="run">
      <ol>
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          1. Download the code from Github including all the images stored in
          assets and all the components (Navbar, Main, Contact, About and Run -
          both .js and .css)
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >
          2. Navigate to the folder "weather_app" and open it.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          3. Use VSCode to open the project
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >
          4. Install the dependencies "react-router-dom", "framer-motion",
          "axios", any other based on the requirement.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          5. Enter the command "npm start" in the terminal
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >
          6. This should open the project on the browser of your computer.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          7. Once the project has been run, it can also be accessed on your
          mobile (on the same network only) using the link in the terminal.
        </motion.li>
        <li>
          P.S. - If any minor warnings occur, please avoid them and restart the
          project.
        </li>
      </ol>
    </div>
  );
};

export default Run;
