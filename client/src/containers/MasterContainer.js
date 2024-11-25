import React, {useState, useEffect} from 'react';
import {getCurrentStocks} from '../services/ApiServices';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./master.css"
import Header from "../components/sharedComponents/Header";
import NavBar from "../components/sharedComponents/NavBar";
import StockMarketContainer from './StockMarketContainer';
import PortfolioContainer from "./PortfolioContainer";
import {fetchedData} from '../components/stockMarketComponents/fetchedData';
import TopBar from '../components/sharedComponents/TopBar';

import SideBar from '../components/sharedComponents/SideBar';
import Footer from '../components/sharedComponents/Footer';
import Clerk from '../Clerk';
const MasterContainer = () => {
  const Layout = ({ children }) => (
    <>
    <TopBar/>
    <div className="sidebar-content-container">
     <SideBar/>
     {children}
    </div>
    </>
   
  );
    const [apiData, setApiData] = useState(fetchedData);
    // const [apiData, setApiData] = useState(null);
    const [historicalPrices, setHistoricalPrices] = useState(null);


    useEffect(() => {
      getCurrentStocks()
      .then(data => setApiData(data))
    },[]);


    const handleHistPrices = (histPricesObject) => {
      setHistoricalPrices(histPricesObject)
    };
    console.log(historicalPrices)
  
    return (
    <>
      <Router>
            <Routes>
              <Route exact path='/Portfolio' element={
                
                <Layout>
                  <PortfolioContainer apiData={apiData}/>
                </Layout>
                } />
              <Route path='/stockmarket' element={
                <Layout>
 <StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices}/>
                </Layout>
               } />
            </Routes>
     {/* <div className="main">
     <Header />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<PortfolioContainer apiData={apiData}/>} />
          <Route path='/stockmarket' element={<StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices} historicalPrices={historicalPrices} />} />
        </Routes>
      </Router>
     </div> */}
    
     
     {/* <Footer /> */}
     </Router>
       
      
    

       
       
       
    
        
    </>
    );
}
 
export default MasterContainer;