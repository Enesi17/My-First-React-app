import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const Search = () => {
  const [results, setResults] = useState([]); // Initialize results state

  return (
    <div className="searchBar"> {/* Fixed typo in className */}
      <SearchBar setResults={setResults} />
      <SearchResult results={results} />
    </div>
  );
};

export default Search;