import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const PaginationControls = ({
  handleNextPage,
  handlePreviousPage,
  isPreviousDisabled,
  isNextDisabled,
}) => {
  return (
    <div className="pagination">
      <button onClick={handlePreviousPage} disabled={isPreviousDisabled}>
        <FontAwesomeIcon icon={faAnglesLeft} style={{ marginRight: "5px" }} />
        Previous
      </button>
      <button onClick={handleNextPage} disabled={isNextDisabled}>
        Next
        <FontAwesomeIcon icon={faAnglesRight} style={{ marginLeft: "5px" }} />
      </button>
    </div>
  );
};

export default PaginationControls;
