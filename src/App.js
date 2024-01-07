import { BrowserRouter as Router, Routes, Route } from "react-router-dom";    //importing router routes and route from react-router-dom
import React from "react";    //react from react 
import { Navbar } from "./components/Navbar";  //importing nvabar form component folder 
import { Home } from "./components/Home";   //importing home from component folder
import { About } from "./components/About"; //importing about 
import NoteState from "./context/Notes/NoteState";    // importing notestate from notes of context folder
import { Alert } from "./components/Alert";     // alert from component 
import { Login } from "./components/Login";     // login component 
import { Signup } from "./components/Signup";   // signup from component 
import { useState } from "react";     // usestate from react 

function App() {        //main app function which loads all the components 
  const [mode, setmode] = useState("light");        // here i am creating a state that stores mode of window that is light mode or dark mode and initially it is in light mode 
  const [alert, setalert] = useState(null);       //here i am making an alert state that store a collection of messege which has to be shown in alert and the type of alert that is danger, success, 
  const showAlert = (messege, type) => {    //show alert function that gets messege and type as the parameter and store it in alert state
    setalert({      //set alert function to set the alert 
      msg: messege,
      type: type,
    });
    // after we call the showAlert function we have to close the slert and to do so we have to make the alert null 
    setTimeout(() => {     
      setalert(null);     // calling the setalert function to null 
    }, 2000);   // after 2 second it will again set to null 
  };      // both setalert and closing the alert is wrap up in the 


  //this funciton is to toggle between the modes of the window  
  const Togglemode = () => {  // arrow function to toggle the mode  
    if (mode === "light") {     //when we call this funtion if it is in light mode htann we will switch to dark mode else we will switch to dark mode using setmode function   
      setmode("dark");
      document.body.style.backgroundColor = "black";      //setting the backgrounf color to black 
      showAlert("Change to Dark mode", "success");      //calling the setalert function to set the alert 
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";    //if dark than set the background color to white
      showAlert("Change to light mode", "success");
    }
  };

  return (   // funciton to return the code and all the calls will be done here
    <>
      {/* <h1>this is Cloud note beook</h1> */}
      {/* adding NoteState to app.js NoteState is to define the location of context for state at .context/Notes?NoteState */}
      <NoteState>  
        {/* Router to store all the routes which we have to add to navbar */}
        <Router>
          <Navbar mode={mode} Togglemode={Togglemode} />{/* navbar components this will render first  */}
          <Alert alert={alert}/>  {/* alert messages to show when we do something like adding,deleting, updating, fetching notes form our databse */}
          <div className="container">
            {/* this div actually contains all the routes for show casing  */}
            <Routes> 
              <Route exact path="/" mode={mode} element={<Home showAlert={showAlert} />} />  {/* this will render on the click on home tab of the navbar,how route to add home page to the website  and it will fetch,delete all the data from the database  */}
              <Route exact path="/about" mode={mode} element={<About />} />{/*This will render when we will click on the about section, this is about section by which we will show case our about section in the website and it will not perform any type of crud operation to our database */}
              <Route exact path="/login" mode={mode} element={<Login showAlert={showAlert} />} />{/*This will render when we will click on the about section, this is about section by which we will show case our about section in the website and it will not perform any type of crud operation to our database */}
              <Route exact path="/signup" mode={mode} element={<Signup showAlert={showAlert}/>} />{/*This will render when we will click on the about section, this is about section by which we will show case our about section in the website and it will not perform any type of crud operation to our database */}
            </Routes> {/* routes section ends haere */}
          </div>
        </Router>
      </NoteState> {/* covering our app.js component section with this tag is must so that we can access the context api and fetch all the states we add there */ }
    </>
  );
}

export default App;  //exporting the App.js
