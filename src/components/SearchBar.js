import React, { useState } from "react";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user) => {
          return user.name && user.name.toLowerCase().includes(value.toLowerCase());
        });
        setResults(result); // Corrected this line to setResults(result)
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="Search">
      <h2>Search Page</h2>
      <hr />
      <p>
        Search:
        <input
          type="text"
          className="searchInput"
          placeholder="Search by title or author..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </p>
    </div>
  );
};

export default SearchBar;