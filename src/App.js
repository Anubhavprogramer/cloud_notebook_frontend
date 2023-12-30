import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";

function App() {
  return (
    <>
      {/* <h1>this is Cloud note beook</h1> */}
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Routes>
        <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
