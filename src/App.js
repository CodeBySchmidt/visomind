import './App.css';
import React from "react";
import Footer from "./Components/Footer";

import Header from "./Components/Header";
import ScrollAnimation from "./Components/ScrollAnimation";
import LoadingContainer from "./Components/LoadingContainer";
import IntroAI from "./Components/IntroAI";

// import { OrbitControls, CameraShake } from '@react-three/drei'
// import { Particles } from './Components/Particel'

function App() {

  return (
      <div className="App">

          <Header/>

          <LoadingContainer/>

          <IntroAI/>

          <ScrollAnimation/>

          <Footer/>

      </div>
  );
}

export default App;
