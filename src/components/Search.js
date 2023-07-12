import React from "react";

function Search({updateSearch}) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => updateSearch(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
