import React from "react";

function SearchBar({ onSortChange, onFilterChange, selectedSort, selectedFilter }) {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  const handleFilterChange = (e) => {
    onFilterChange(e.target.value.toLowerCase()); // Convert to lowercase
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={selectedSort === "Alphabetically"}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={selectedSort === "Price"}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange} value={selectedFilter || "All"}>
        <option value="All">All</option>
  <option value="Tech">Tech</option>
  <option value="Sportswear">Sportswear</option>
  <option value="Finance">Finance</option>
</select>
      </label>
    </div>
  );
}

export default SearchBar;
