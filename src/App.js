import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import NoteState from "./context/Notes/NoteState";

function App() {
  return (
    <>
      {/* <h1>this is Cloud note beook</h1> */}
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
