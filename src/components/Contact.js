import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="contact">
      <div className="con">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          <b>Made By:</b> Aman Kumar Singh
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          <b>Phone Number:</b> +91 9999111016
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          <b>E-mail:</b> amankumar.ug20@nsut.ac.in
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          Computer Science, B.Tech., Netaji Subhas University of Technology
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          Made for: Weather
        </motion.h1>
      </div>
    </div>
  );
};

export default Contact;
