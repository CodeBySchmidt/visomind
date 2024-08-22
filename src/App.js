import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/AboutUs";

// import Footer from "./Components/Footer";
//
// import Header from "./Components/Header";
// import ScrollAnimation from "./Components/ScrollAnimation";
// import LoadingContainer from "./Components/LoadingContainer";
// import IntroAI from "./Components/IntroAI";

// import { OrbitControls, CameraShake } from '@react-three/drei'
// import { Particles } from './Components/Particel'

function App() {

    return (
        <div className="App">
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/about-us" element={<About/>}></Route>
                        {/*<Route path="/info" element={<InfoPage />}></Route>*/}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
