import React from "react";

function Stock({ ticker, name, type, price, id, onStockClick }) {

  const handleClick = () => {
    const stockObj = {
      ticker,
      name,
      type,
      price,
      id,
    }
    onStockClick(stockObj)
  }

  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
