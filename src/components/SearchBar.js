import React from "react";

function SearchBar({ sort, setSort, filter, setFilter }) {

  const handleSortSelection = (e) => {
    setSort(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sort === "Alphabetically"}
          onChange={handleSortSelection}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sort === "Price"}
          onChange={handleSortSelection}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange} value={filter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
