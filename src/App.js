import React, { useState } from "react";
import "./styles.css";

const travel = {
  Europe: [
    { name: "Paris", rating: "5/5" },
    { name: "Finland", rating: "4.5/5" },
    { name: "Copenhagen", rating: "4/5" }
  ],
  NorthAmerica: [
    { name: "Alaska", rating: "5/5" },
    { name: "California", rating: "4.5/5" },
    { name: "Northern Lights", rating: "5/5" }
  ],
  Asia: [
    { name: "Conrad Manila", rating: "5/5" },
    { name: "Maldives", rating: "4/5" },
    { name: "East India", rating: "5/5" }
  ],
  Africa: [
    { name: "Zanzibar", rating: "5/5" },
    { name: "Seychelles", rating: "5/5" },
    { name: "Chefchaouen", rating: "4.5/5" }
  ]
};

export default function App() {
  const [selectedContinent, setContinent] = useState("Europe");
  function continentClickHandler(continent) {
    setContinent(continent);
  }
  return (
    <div className="App">
      <div className="gap"></div>
      <h1 className="heading"> ✈️ GoodTravel</h1>
      <p className="subHeading">
        Checkout my favorite places to travel. Select a continent to get started
      </p>

      <div className="continentList">
        {Object.keys(travel).map((continent) => (
          <button
            className="button"
            onClick={() => continentClickHandler(continent)}
          >
            {continent}
          </button>
        ))}
      </div>
      <hr className="hr" />
      <div className="placesList">
        <ul className="unorderedList">
          {travel[selectedContinent].map((place) => (
            <li className="listName">
              <div className="movie-name"> {place.name} </div>
              <div className="movie-rating"> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
