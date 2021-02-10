import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
    <label for="select">Select:</label>
    <select className="form-control" id="select">
      <option>Concert</option>
      <option>Movie</option>
      <option>Song</option>
    </select>
  </div>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
