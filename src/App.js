import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import NoteState from "./context/Notes/NoteState";
import { Alert } from "./components/Alert";

function App() {
  return (
    <>
      {/* <h1>this is Cloud note beook</h1> */}
      {/* adding NoteState to app.js NoteState is like context for state located at .context/Notes?NoteState */}
      <NoteState>  
        {/* Router to store all the routes which we have to add to navbar */}
        <Router>
          <Navbar />{/* navbar components this will render first  */}
          <Alert messages="I am prowest of the pro"/>  {/* alert messages to show when we do something like adding,deleting, updating, fetching notes form our databse */}
          <div className="container">
            {/* this div actually contains all the routes for show casing  */}
            <Routes> 
              <Route exact path="/" element={<Home />} />  {/* this will render on the click on home tab of the navbar,how route to add home page to the website  and it will fetch,delete all the data from the database  */}
              <Route exact path="/about" element={<About />} />{/*This will render when we will click on the about section, this is about section by which we will show case our about section in the website and it will not perform any type of crud operation to our database */}
            </Routes> {/* routes section ends haere */}
          </div>
        </Router>
      </NoteState> {/* covering our app.js component section with this tag is must so that we can access the context api and fetch all the states we add there */ }
    </>
  );
}

export default App;
