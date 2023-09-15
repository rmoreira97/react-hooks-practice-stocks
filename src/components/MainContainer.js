import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, portfolio, onBuyStock, onSellStock }) {
  const [sortType, setSortType] = useState("Alphabetically");
  const [filterType, setFilterType] = useState("All");
  const [filteredStocks, setFilteredStocks] = useState([...stocks]);

  const handleSortChange = (sort) => {
    setSortType(sort);
  };

  const handleFilterChange = (filter) => {
    setFilterType(filter);
  };

  useEffect(() => {
    let sortedStocks = [...stocks];

    if (sortType === "Alphabetically") {
      sortedStocks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "Price") {
      sortedStocks.sort((a, b) => a.price - b.price);
    }

    let updatedFilteredStocks = [...sortedStocks];
    if (filterType !== "All") {
      updatedFilteredStocks = sortedStocks.filter(
        (stock) => stock.type.toLowerCase() === filterType.toLowerCase()
      );
    }
    
    setFilteredStocks(updatedFilteredStocks);
  }, [stocks, sortType, filterType]);

  return (
    <div>
      <SearchBar
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
        selectedSort={sortType}
        selectedFilter={filterType === null ? "All" : filterType}// Display "All" if filterType is null
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredStocks}
            onBuyStock={onBuyStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onSellStock={onSellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
