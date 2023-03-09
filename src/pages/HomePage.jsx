import Navbar from "../components/Navbar";
import React from "react";
import allBeersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <div className="hpDiv">
      <Link to="/allBeers">   <img src={allBeersImg} alt="beerImg" /></Link>
        <span className="textHP">
        <Link to="/allBeers"> <h1>All Beers</h1></Link>
           
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </span>
      </div>
      <div className="hpDiv">
      <Link to="/random"><img src={randomBeerImg} alt="beerImg" /></Link>
        <span className="textHP">
        <Link to="/random"><h1>Random Beer</h1></Link>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </span>
      </div>
      <div className="hpDiv">
      <Link to="/NewBeer"><img src={newBeerImg} alt="beerImg" /></Link>
        <span className="textHP">
        <Link to="/NewBeer"><h1>Create a Beer</h1></Link>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </span>
      </div>
    </div>
  );
}

export default HomePage;
