import React,{useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

// function based component for loading navbar
export const Navbar = () => {
  // here we are adding  using useLocation hook to get the locaiton of page we are on, like in this either we are in / page or in /about page location variable will strore the whole object returned from useLocation() function 
  let location = useLocation();
  useEffect(()=>{
    // location.pathname will store the path name of page
    console.log(location.pathname) //printing the location of the page
    },[location])
    //here we are using use effect ti get the location everytime we refresh the page or move to another page like home or about (int this case)
  return (
    <>
    {/* bootstrap code to make navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">{/* here we are using turnary operators to check if we are in / page than active class will get added else not  */}
                {/* we are adding active so that on being on that page, in the navbar name of that apge will get brighter */}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname==="/about"? "active":""}`}
                  aria-current="page"
                  to="/About"
                >{/* here we are using turnary operators to check if we are in / page than active class will get added else not  */}
                {/* we are adding active so that on being on that page, in the navbar name of that apge will get brighter */}
                  About
                  {/* about id to made  */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
