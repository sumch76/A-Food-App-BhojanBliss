import React, { useContext } from "react";
import userContext from "../context/userContext";
const NoSearch = () => {
  const { searchText } = useContext(userContext);

  return (
    <div className="no-search">
      <img
        src="https://media1.tenor.com/m/SdheUhSR4Z0AAAAd/noresults-google-results.gif" 
        alt="No results"
        className="no-search-gif"
      />
      <h2>Oops! No results found for "{searchText}"</h2>
      <p>Try searching for something else or explore our popular restaurants.</p>
      <button
        className="retry-button"
        onClick={() => window.location.reload()}
      >
        Retry Search
      </button>
    </div>
  );
};

export default NoSearch;
