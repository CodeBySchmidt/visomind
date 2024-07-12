import './App.css';
import Header from "./Components/Header";
import ScrollAnimation from "./Components/ScrollAnimation";
import LoadingContainer from "./Components/LoadingContainer";
import React from "react";



function App() {
  return (
      <div className="App">

          <Header/>

          <LoadingContainer/>

          <ScrollAnimation/>



          <LoadingContainer/>

          <div className={"end-App"}> Footer </div>
      </div>
  );
}

export default App;
