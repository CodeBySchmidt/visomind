import React from "react";

import Header from "../Components/Header";
import LoadingContainer from "../Components/LoadingContainer";
import IntroAI from "../Components/IntroAI";
import ScrollAnimation from "../Components/ScrollAnimation";
import Footer from "../Components/Footer";

// import './App.css';

function Home() {

  return (
      <div className="home">

          <Header/>

          <LoadingContainer/>

          <IntroAI/>

          <ScrollAnimation/>

          <Footer/>

      </div>
  );
}

export default Home;