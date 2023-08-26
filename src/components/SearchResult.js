import React from 'react';

const SearchResult = ({ results }) => {
  return (
    <div className="results">
      {results.map((result, id) => {
        return <div className="res" key={id}>{result.name}</div>;
      })}
    </div>
  );
};

export default SearchResult;