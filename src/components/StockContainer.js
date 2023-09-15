import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuyStock }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks && stocks.length > 0 ? (
        stocks.map((stock) => (
          <Stock key={stock.id} stock={stock}  onBuyStock={onBuyStock} />
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default StockContainer;