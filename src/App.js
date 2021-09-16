import React, { useState } from "react";
import "./styles.css";

const travel = {
  Europe: [
    { name: "Paris", description: "the city of love", rating: "5/5" },
    { name: "Finland", description: "the finest land", rating: "4.5/5" },
    { name: "Copenhagen", description: "the colorful cuty", rating: "4/5" }
  ],
  NorthAmerica: [
    { name: "Alaska", description: "enjoy the chills", rating: "5/5" },
    {
      name: "California",
      description: "ahh! golden state warriors land",
      rating: "4.5/5"
    },
    {
      name: "Northern Lights",
      description: "you'll fall in love with the lights",
      rating: "5/5"
    }
  ],
  Asia: [
    {
      name: "Conrad Manila",
      description: "just wow!",
      rating: "5/5"
    },
    {
      name: "Maldives",
      description: "omg! the beaches blue",
      rating: "4/5"
    },
    {
      name: "East India",
      description:
        "do you even love to travel if you dont have this on your bucker list?",
      rating: "5/5"
    }
  ],
  Africa: [
    {
      name: "Zanzibar",
      description: "just go now and visit this damn place!",
      rating: "5/5"
    },
    {
      name: "Seychelles",
      description: "the chills in seychelles",
      rating: "5/5"
    },
    {
      name: "Chefchaouen",
      description: "the foooood over here!!",
      rating: "4.5/5"
    }
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
              <div className="movie-name" style={{ color: "#0c4a6e" }}>
                {place.name}
              </div>
              <div className="movie-rating" style={{ fontWeight: "bold" }}>
                {place.description}
              </div>
              <div className="movie-rating"> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
