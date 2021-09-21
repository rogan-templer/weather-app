import React, { useState, useEffect } from "react";
import { getAucklandWeather, getAucklandTemp } from "../api";

function Auckland() {
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    getAucklandWeather().then((data) => {
      setWeather(data);
    });
  }, []);

  useEffect(() => {
    getAucklandTemp().then((data) => {
      setTemp(data);
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
              </div>
            );
          })}
        </ul>
        <h2>{temp} celcius</h2>
      </div>
    </>
  );
}

export default Auckland;
