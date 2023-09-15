import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]); // Initialize with an empty array
  const [portfolio, setPortfolio] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("http://localhost:3001/stocks");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched stocks:", data); // Add this line
        setStocks(data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };
  
    fetchStocks();
  }, []);

  // Function to handle buying a stock
  const handleBuyStock = (stock) => {
    // Add the stock to the portfolio
    setPortfolio([...portfolio, stock]);
  };
  
  // Function to handle selling a stock
  const handleSellStock = (stock) => {
    // Remove the stock from the portfolio
    const updatedPortfolio = portfolio.filter((item) => item.id !== stock.id);
    setPortfolio(updatedPortfolio);
  };

  return (
    <div>
      <Header />
      <MainContainer
        stocks={stocks}
        portfolio={portfolio}
        onBuyStock={handleBuyStock}
        onSellStock={handleSellStock}
      />
    </div>
  );
}

export default App;
