import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, onStockClick }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map(portfolioStock => (
        <Stock
          key={portfolioStock.id}
          onStockClick={onStockClick}
          {...portfolioStock}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
