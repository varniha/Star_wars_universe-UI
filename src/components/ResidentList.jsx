import React, { useState, useEffect } from "react";
import "../App.css";

const ResidentList = ({ residents, fetchResidents, planet }) => {
  const [showResidents, setShowResidents] = useState(false);
  const [residentData, setResidentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showResidents) {
      const fetchAndSetResidents = async () => {
        setIsLoading(true); 
        const data = await fetchResidents(planet.residents);
        setResidentData(data);
        setIsLoading(false);
      };
      fetchAndSetResidents();
    } else {
      setResidentData([]); 
    }
  }, [showResidents, fetchResidents, planet.residents]);

  const toggleResidents = () => {
    setShowResidents(!showResidents);
  };

  return (
    <div className="resident-list">
      <button onClick={toggleResidents}>
        {showResidents ? "Hide Residents" : "Show Residents"}
      </button>
      {showResidents && isLoading && <p>Loading...</p>}
      {showResidents &&
      !isLoading &&
      residentData &&
      residentData.length > 0 ? (
        <ul>
          {residentData.map((resident, index) => (
            <li key={index}>
              Resident Name - {resident.name},<br /> Height: {resident.height},
              <br /> Mass: {resident.mass},<br /> Gender: {resident.gender}
            </li>
          ))}
        </ul>
      ) : (
        showResidents && !isLoading && <p>No resident data available.</p>
      )}
    </div>
  );
};

export default ResidentList;
