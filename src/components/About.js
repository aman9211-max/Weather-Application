import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="about" style={{ color: "white" }}>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={transition}
        className="my-4"
        style={{ fontSize: "2rem", fontWeight: "bold" }}
      >
        GlazTower Weather Updates
      </motion.h1>
      <motion.h3
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={transition}
        className="my-4"
        style={{ fontSize: "1.5rem", textDecoration: "underline" }}
      >
        Project Information:
      </motion.h3>
      <br />
      <div className="info">
        <motion.p 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={transition}
        style={{ textAlign: "center", fontSize: "1.2rem" }}>
          This project is made using React. User enters the city for which the
          weather data is to be fetched and the data is displayed. The displayed
          data includes the Location, Temperature, Humidity, Wind Speed and
          Precipitation Chances. After the user enters the location Data is
          fetched from Weather API available on OpenWeather
          "https://openweathermap.org/api". If the data is not retrieved due to
          any reason, the website displays "Not Found" at all the values. The
          background changes with the temperature. If the temperature is very
          hot, the background changes to a desert, if the temperature drops
          below 10 degree Celcius, the background changes to a snow and if there
          is a more than 60% chance of precipitation, then the background
          changes to rainy. Similarly, the icons changes according to the
          weather.
        </motion.p>
        <br />
        <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={transition}
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            textDecoration: "underline",
          }}
        >
          <li>
            Note -- Please try out different locations while using the app like
            Delhi, Dee, Mumbai, Leh, Prague, Miami, Dallas, etc.
          </li>
        </motion.p>
        <br />
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          The website is compatible with all screen sizes, but for best
          experience use a computer/laptop.
        </p>
      </div>
    </div>
  );
};

export default About;
