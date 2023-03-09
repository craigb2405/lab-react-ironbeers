import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // <== ADD
    e.preventDefault();

    const requestBody = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", requestBody)
      .then(() => {
        // Reset the state
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips('')
        setAttenuationLevel(0);
        setContributedBy("");
        alert("Beer Created");
        navigate("/allBeers");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <Navbar />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                ></input>

            <label>Tagline: </label>
                <input
                type="text"
                name="tagline"
                value={tagline}
                onChange={(e)=> setTagline(e.target.value)}
                ></input>
            <label>Description: </label>
                <textarea
                type="text"
                name="description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                ></textarea>
            <label>First Brewed: </label>
                <input
                type="text"
                name="firstBrewed"
                value={first_brewed}
                onChange={(e)=> setFirstBrewed(e.target.value)}
                ></input>
            <label>Brewers Tips: </label>
                <input
                type="text"
                name="brewersTips"
                value={brewers_tips}
                onChange={(e)=> setBrewersTips(e.target.value)}
                ></input>
            <label>Attenuation Level: </label>
                <input
                type="number"
                name="attenuationLevel"
                value={attenuation_level}
                onChange={(e)=> setAttenuationLevel(e.target.value)}
                ></input>
            <label>Contributed By: </label>
                <input
                type="text"
                name="contributedBy"
                value={contributed_by}
                onChange={(e)=> setContributedBy(e.target.value)}
                ></input>
          <button id="button" type="submit">Submit </button>
        </form>
      </div>
    </div>

    // State for each form
    // React form in todays code on AddProject
    // Handle submit and preventDefault
  );
}

export default NewBeer;
