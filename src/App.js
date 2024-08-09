import './App.css';
import Header from "./Components/Header";
import ScrollAnimation from "./Components/ScrollAnimation";
import LoadingContainer from "./Components/LoadingContainer";
import React from "react";
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


          <div className={"end-App"}> Footer </div>
      </div>
  );
}

export default App;
