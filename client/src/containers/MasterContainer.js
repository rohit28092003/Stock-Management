import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./master.css";
import TopBar from "../components/sharedComponents/TopBar";
import SideBar from '../components/sharedComponents/SideBar';
import PortfolioContainer from "./PortfolioContainer";
import StockMarketContainer from './StockMarketContainer';
import { getCurrentStocks } from '../services/ApiServices';
import { fetchedData } from '../components/stockMarketComponents/fetchedData';

const MasterContainer = () => {
  const [apiData, setApiData] = useState(fetchedData); // Fallback data for mock display
  const [historicalPrices, setHistoricalPrices] = useState(null);

  useEffect(() => {
    getCurrentStocks()
      .then(data => setApiData(data))
      .catch(err => console.error("Error fetching stock data:", err)); // Handle errors
  }, []);

  const handleHistPrices = (histPricesObject) => {
    setHistoricalPrices(histPricesObject);
    console.log("Historical Prices Updated:", histPricesObject);
  };

  return (
    <Router>
      <>
        <TopBar />
        <div className="sidebar-content-container">
          <SideBar />
          <div className="main-content">
            <Routes>
              <Route 
                path="/" 
                element={
                  apiData ? (
                    <PortfolioContainer apiData={apiData} />
                  ) : (
                    <div>Loading Portfolio...</div>
                  )
                } 
              />
              <Route 
                path="/Portfolio" 
                element={
                  apiData ? (
                    <PortfolioContainer apiData={apiData} />
                  ) : (
                    <div>Loading Portfolio...</div>
                  )
                } 
              />
              <Route 
                path="/stockmarket" 
                element={
                  apiData ? (
                    <StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices} />
                  ) : (
                    <div>Loading Stock Market...</div>
                  )
                } 
              />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
};

export default MasterContainer;
