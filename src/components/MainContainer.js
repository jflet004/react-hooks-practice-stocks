import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [sort, setSort] = useState("")
  const [filter, setFilter] = useState("Tech")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(response => response.json())
      .then(stocks => setStocks(stocks))
  }, [])

  const handleStockPurchase = (purchasedStock) => {
    const stockInPortfolio = portfolioStocks.find(stock => stock.id === purchasedStock.id)
    if (!stockInPortfolio) {
      setPortfolioStocks([...portfolioStocks, purchasedStock])
    }
  }

  const handleStockSell = (soldStock) => {
    const updatedPortfolio = portfolioStocks.filter(portfolioStock => portfolioStock.id !== soldStock.id)
    setPortfolioStocks(updatedPortfolio)
  }

  const sortStocks = [...stocks].sort((stock1, stock2) => {
    if (sort === "") {
      return true
    } else if (sort === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name)
    } else {
      return stock1.price - stock2.price
    }
  })

  const filterStocks = sortStocks.filter(
    stock => stock.type === filter
  )


  return (
    <div>
      <SearchBar
        sort={sort}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filterStocks}
            onStockClick={handleStockPurchase}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolioStocks={portfolioStocks}
            onStockClick={handleStockSell}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
