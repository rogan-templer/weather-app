import React from "react";
import { Link } from "react-router-dom";
import Auckland from "./Auckland";

function Landing() {
  return (
    <>
      <h1>Choose your location to explore the weather</h1>
      <Link to={{ pathname: "/Auckland" }}>Auckland {Auckland}</Link>
    </>
  );
}

export default Landing;
