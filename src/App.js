import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import PlanetCard from "./components/PlanetCard";
import ResidentList from "./components/ResidentList";
import PaginationControls from "./components/PaginationControls";
import "./App.css";

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    fetchPlanets("https://swapi.dev/api/planets/?format=json");
  }, []);

  const fetchPlanets = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
      setNextPage(data.next);
      setPreviousPage(data.previous);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };

  const fetchResidents = async (residentUrls) => {
    const residentsData = await Promise.all(
      residentUrls.map(async (url) => {
        const response = await fetch(url);
        const resident = await response.json();
        return {
          name: resident.name,
          height: resident.height,
          mass: resident.mass,
          gender: resident.gender,
        };
      })
    );
    return residentsData;
  };

  const handleNextPage = () => {
    if (nextPage) {
      fetchPlanets(nextPage);
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      fetchPlanets(previousPage);
    }
  };

  return (
    <>
      <header className="title">
        <FontAwesomeIcon className="icon-star" icon={faJedi} size="2x" />
        <h1>Star Wars Universe</h1>
        <div className="options-icon"></div>
      </header>
      <div className="App">
        <div className="container">
          <div className="planets-container">
            {planets.map((planet, index) => (
              <div key={index} className="planet-card">
                <PlanetCard planet={planet} />
                <ResidentList fetchResidents={fetchResidents} planet={planet} />
              </div>
            ))}
          </div>
          <PaginationControls
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            isPreviousDisabled={!previousPage}
            isNextDisabled={!nextPage}
          />
        </div>
      </div>
    </>
  );
};

export default App;
