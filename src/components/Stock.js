import React from "react";

function Stock({ stock, onBuyStock, onSellStock }) {
  return (
    <div className="stock">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
          {onBuyStock && (
            <button className="btn btn-primary" onClick={() => onBuyStock(stock)}>
              Buy
            </button>
          )}
          {onSellStock && (
            <button className="btn btn-danger" onClick={() => onSellStock(stock)}>
              Sell
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stock;
