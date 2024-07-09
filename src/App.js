// import './App.css';
import Header from "./Header";
import ScrollAnimation from "././ScrollAnimation";
import LoadingContainer from "./LoadingContainer";
import React from "react";

function App() {
  return (
      <div className="App">
          <Header/>

          <LoadingContainer/>

          <ScrollAnimation/>

      </div>
  );
}

export default App;
