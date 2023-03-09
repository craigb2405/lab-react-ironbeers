import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

function AllBeers() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((result) => {
      setBeers(result.data);
    });
  }, []);

  const handleChange = (e) => {
   
      axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((searchResult) => {
        setBeers(searchResult.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar></Navbar>
      <form onChange={handleChange}>
        <label>Search: </label>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>

      {beers.map((individualBeer) => {
        return (
          <div className="container" key={individualBeer._id}>
            <div className="beerCard">
              <div className="beerImg">
                <NavLink
                  className="listItem"
                  to={`/beers/${individualBeer._id}`}
                >
                  <img src={individualBeer.image_url} />
                </NavLink>
              </div>
              <div className="beerText">
                <NavLink
                  className="listItem"
                  to={`/beers/${individualBeer._id}`}
                >
                  <h2>{individualBeer.name}</h2>
                </NavLink>
                <p className="tag">{individualBeer.tagline}</p>
                <p>
                  <b>Created By:</b> {individualBeer.contributed_by}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
