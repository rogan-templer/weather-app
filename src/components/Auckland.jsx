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
        <span>
          {weather.map((details, index) => {
            return (
              <div>
                <h2 key={index}>{details.main}</h2>
              </div>
            );
          })}
        </span>
        <AucklandTemp />
        <BackToHome />
      </div>
    </>
  );
}

export default Auckland;
