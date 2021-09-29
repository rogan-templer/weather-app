import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { getAucklandWeather } from "../api";

import AucklandTemp from "./AuclandTemp";
import BackToHome from "./BackToHome";

function Auckland() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    getAucklandWeather().then((data) => {
      setWeather(data);
    });
  }, []);

  return (
    <>
      <div>
        <ul>
          {weather.map((details, index) => {
            return (
              <div>
                <li key={index}>{details.description}</li>
                <li>{details.icon}</li>
              </div>
            );
          })}
        </ul>
        <AucklandTemp />
        <BackToHome />
      </div>
    </>
  );
}

export default Auckland;
