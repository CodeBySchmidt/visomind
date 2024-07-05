import './App.css';
import Header from "./Header";
import test from "./test.jpg"

function App() {
  return (
      <div className="App">
          <Header/>
          <div className="Content-container">

              <div className="App-intro pt-20">
                  <h1> Screen 1 </h1>
                  <div className="Image-container">
                      <img src={test} className="image" alt="myImage"/>
                  </div>
              </div>

              <div className="App-Kapitel-1">
                  <h1> Screen 2 </h1>
              </div>

              <div className="App-Kapitel-2">
                  <h1> Screen 3 </h1>
              </div>

              <div className="App-Kapitel-3">
                  <h1> Screen 4 </h1>
              </div>

              <div className="App-Kapitel-4">
                  <h1> Screen 5 </h1>
              </div>

              <div className="App-Kapitel-5">
                  <h1> Screen 6 </h1>
              </div>

              <div className="App-Kapitel-6">
                  <h1> Screen 7 </h1>
              </div>

          </div>
      </div>
  );
}

export default App;
