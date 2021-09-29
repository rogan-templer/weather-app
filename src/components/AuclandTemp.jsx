import React, { useState, useEffect } from "react";
import { getAucklandTemp } from "../api";

function AucklandTemp() {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    getAucklandTemp().then((data) => {
      setTemp(data);
    });
  }, []);

  return (
    <>
      <div>
        <h4>Temperature: {Math.floor(temp)}&#176;C</h4>
      </div>
    </>
  );
}

export default AucklandTemp;
