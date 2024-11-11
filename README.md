# Portfolio Tracker
The Portfolio Tracker app allows a user to track their shareholdings performance and total portfolio value in real-time. The "Discover" page allows a user to select a number of stocks provided by an external API, real-time data comes from the NASDAQ stock exchange. User is able to compare different stocks, add them to their portfolio and track the total portfolio value in real-time which is displayed on "My Portfolio" page.

Built using MongoDB, Express, React, Node.


## Video Demo and Screenshots

Demo: https://youtu.be/f05D_Hy-H0Y


Portfolio / Home Page

![Screenshot of Portfolio page](images/PortfolioHomePage.png "Portfolio")


![Stock Price History](images/ShareHistory.png "Stock Price History")

![Add More Shares](images/AddMore.png "Add More Shares")

![Remove Some Shares](images/Remove.png "Remove Some Shares")

![Delete Shares](images/Delete.png "Delete Shares")

Discover Page

![Discover Main Page](images/DiscoverMain.png "Discover Main Page")
![Search Feature](images/Search.png "Search Feature")



## Project brief
A local trader has come to you with a portfolio of shares. She wants to be able to analyse it more effectively. She has a small sample data set to give you and would like you to build a Minimum Viable Product that uses the data to display her portfolio so that she can make better decisions.

## MVP

A user should be able to:

- Add/Remove/Update/Delete Shares.
- View total current value.
- View individual and total performance trends.
- Retrieve a list of share prices from an external API and add shares to their portfolio.
- View a chart of the current values in their portfolio.

## Extensions

- View current share price of individual shareholdings.
- View average and total paid prices for individual shares in the portfolio.
- View a chart of total paid price, total value and profit/loss.
- Implement a search box to find a specific stock using external API data.
- Temporarily add searched and selected stock to compare.
- Compare past share performance data for any publicly traded company.

## API, Libraries, Resources
- https://financialmodelingprep.com/ (Requires an account)
- https://www.highcharts.com/ HighCharts is an open-source library for rendering responsive charts.
- https://reactjs.org/
- https://expressjs.com/
- https://www.mongodb.com/
- https://nodejs.org/en/

## The project is built using:
* Javascript (Node)
* React
* Express
* MongoDB
* HTML / CSS
* Additional libraries used: HighCharts, Bootstrap
The application is using Financial Modeling Prep API as a source of stock data: https://financialmodelingprep.com/developer/docs/

## Project set up

| Front-end (client) | Back-end (server)    |
| :---               | :---                 |
| `npm install`      | `npm install`        |
| `npm start`        | `npm run seeds`      |
|                    | `npm run server:dev` |

To run this application locally, sign-up to get a free API key kere: https://financialmodelingprep.com/. Then inside ``` client/src/services ``` folder create a new file ```apikey.js```. Inside this file insert the line from bellow adding your API key where indicated:

```

export const apikey = "API_key_here"
export const apikeyPH = "API_key_here"

```# Stock-Management
