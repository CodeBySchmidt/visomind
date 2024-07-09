// import React, { useEffect, useState } from "react";
import mySVG from "./VISOTRAIN.svg"

import "./LoadingContainer.css"; // Importiere die CSS-Datei für die Stile der LoadingContainer-Komponente

const LoadingContainer = () => {

  return (
    <div className="loading-container">
        <div className="loader">
            <img src={mySVG} alt="SVG"/>
        </div>
    </div>
  );
};

export default LoadingContainer;
