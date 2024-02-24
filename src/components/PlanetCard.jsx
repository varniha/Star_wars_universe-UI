import React, { useState } from "react";
import "../App.css";
import PlanetImages from "./PlanetImages";
import { Card } from "flowbite-react";

const PlanetCard = ({ planet }) => {
  const imageURL = PlanetImages[planet.name];
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="planet">
      <Card className="planet-cards max-w-sm">
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
          }}
        />
        <h2>{planet.name}</h2>
        <p>
          Climate: {planet.climate} <br />
          Population: {planet.population} <br />
          Terrain: {planet.terrain} <br />
          {showDetails && (
            <>
              Diameter: {planet.diameter} <br />
              Gravity: {planet.gravity}
            </>
          )}
          <span
            onClick={toggleDetails}
            style={{ cursor: "pointer", color: "#646060" }}
          >
            {showDetails ? "...Show less" : "...Show more"}
          </span>
        </p>
      </Card>
    </div>
  );
};

export default PlanetCard;
