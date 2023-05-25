import React, { useEffect } from "react";
import "./Main.css";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import bg1 from "../assets/BG-1.jpg";
import bg2 from "../assets/BG-2.jpg";
import bg3 from "../assets/BG-3.jpg";
import bg4 from "../assets/BG-4.jpg";
import bg5 from "../assets/BG-5.jpg";
import loc from "../assets/location.svg";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.svg";
import sun from "../assets/sun.svg";
import cloud from "../assets/cloud.png";
import snow from "../assets/snow.svg";
import rain from "../assets/rain.png";
import search from "../assets/search-icon.png"; 


const Main = () => {
  const [icon, setIcon] = useState(sun)  
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const current = new Date();
  const d = new Date();
  const day = weekday[d.getDay()];
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const transition = { type: "spring", duration: 3 };
  const [sel, setSel] = useState(1);
  const [bg, setbg] = useState(bg2);
  const [ret, setRet] = useState(true);
  const [location, setLocation] = useState("");
  const handleSearch = () => {
    getWeather(location);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
  };

  const [data, setData] = useState({});

  const getWeather = (location) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e59faf165fe3cd7d81345203cfc8baf6`
      )
      .then((res) => {
        setData(res.data);
        motionf();
        setRet(true);
        if (res.data.main.temp <= 313 && res.data.main.temp >= 283) {
          if (res.data.clouds.all >= 70){
            setIcon(cloud)
            // setIcon2(rain)
            setbg(bg5);
          }
            else {
            setIcon(sun)
            setbg(bg1);
          }
        } else if (res.data.main.temp >= 313) {
          setbg(bg4);
          setIcon(sun)
        } else {
          setbg(bg3);
          setIcon(snow)
        }
      })
      .catch((err) => {
        console.log("err", err);
        setRet(false);
      });
  };

  const motionf = () => {
    sel === 0 ? setSel(1) : setSel(0);
  };

  useEffect(() => {
    getWeather(location);
  }, []);

  return (
    <div className="main gap-y-12 flex">
      <div className="search-t flex" style={{ backgroundImage: `url(${bg})` }}>
        <div className="search w-2/4 p-1 rounded-3xl flex">
          <input
            type="text"
            value={location}
            onChange={handleChange}
            placeholder="Enter Location"
            className="w-4/5 m-1 border-none"
          ></input>
          <button className="btn rounded-3xl p-2 w-1/5 flex" onClick={handleSearch} placeholder="Search">
            <p>Search</p>
            <img src={search} alt="" className="w-6" style={{filter:"invert(1)"}} />
          </button>
        </div>
      </div>
      <div className="content-main flex ">
        <div className="update-icon">
          <motion.img 
          key={sel}
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={transition}
          src={icon} alt="" className="h-28" />
        </div>
        <div className="content">
          <div className="day-date">
            <div className="day">{day}</div>
            <motion.div
              key={sel}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={transition}
              className="date"
            >
              {date}
            </motion.div>
          </div>
          <div className="loc flex">
            <motion.h1
              className="flex"
              key={sel}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={transition}
            >
              {ret ? data?.name : "Not Found"}
              <img src={loc} alt="" className="h-8 w-8 m-2" style={{filter:"invert(1)"}}/>
            </motion.h1>
          </div>
          <div className="temp">
            <motion.p
              key={sel}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={transition}
            >
              Temperature :{" "}
              {ret ? (data?.main?.temp - 273.15).toFixed(2) : "Not Found"} °C
            </motion.p>
          </div>
          <div className="other-info">
            <div className="humidity">
              <motion.p
                className="flex"
                key={sel}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={transition}
              >
                <img src={humidity} alt="" className="h-6 mx-2" style={{filter:"invert(1)"}}/>
                Humidity : {ret ? data?.main?.humidity : "Not Found"} %
              </motion.p>
            </div>
            <div className="wind">
              <motion.p
                className="flex"
                key={sel}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={transition}
              >
                <img src={wind} alt="" className="h-6 mx-2" style={{filter:"invert(1)"}}/>
                Wind speed : {ret ? data?.wind?.speed : "Not Found"} m/s
              </motion.p>
            </div>
            <div className="rain">
              <motion.p
                className="flex"
                key={sel}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={transition}
              >
                <img src={rain} alt="" className="h-6 mx-2" style={{filter:"invert(1)"}}/>
                Rain Chances : {ret ? data?.clouds?.all : "Not Found"} %
              </motion.p>
            </div>
          </div>
        </div>
        <div className="update-icon">
          <motion.img 
          key={sel}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={transition}
          src={icon} alt="" className="h-28" />
        </div>
      </div>
    </div>
  );
};

export default Main;
