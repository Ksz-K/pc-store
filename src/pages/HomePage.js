import React, { Fragment, useEffect, useState } from "react";
import Curtain from "../components/Curtain";
import InfoBoard from "../components/InfoBoard";
import Slider from "../components/Slider";


const Home = () => {
  
  return (
    <Fragment>
      <Curtain /> 
      <InfoBoard />
      <Slider />
    </Fragment>
  );
};

export default Home;
