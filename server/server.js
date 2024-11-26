// const express = require("express");
// const app = express();
// const MongoClient = require("mongodb").MongoClient;
// const createRouter = require("./helpers/create_router");
// const cors = require("cors");

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );
// app.use(express.json());

// MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
//   .then((client) => {
//     const db = client.db("portfolio");
//     const sharesCollection = db.collection("shares");
//     const sharesRouter = createRouter(sharesCollection);
//     app.use("/api/shares", sharesRouter);
//   })
//   .catch(console.error);

// app.get('/',(req,res)=>{
//   console.log("hi iam there")
// })

// app.listen(8080, function () {
//   console.log(`Listening on port ${this.address().port}`);
// });






require('dotenv').config(); // To load environment variables from a .env file

const express = require("express");
const mongoose = require("mongoose"); // Import Mongoose
const createRouter = require("./helpers/create_router");
const cors = require("cors");

// Set up the Express application
const app = express();

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000", // Allow frontend app to connect
  })
);

app.use(express.json());

// Fetch Mongo URI from environment variable (stored in .env file)
const MONGO_URI = "mongodb://localhost:27017";

// Connect to MongoDB Atlas using Mongoose
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,   // Use the new URL parser
    useUnifiedTopology: true, // Use the unified topology engine
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    // Once connected, set up the routes
    const db = mongoose.connection; // Access the mongoose connection
    const sharesCollection = db.collection("shares");
    const sharesRouter = createRouter(sharesCollection); // Assuming createRouter works with Mongoose collections
    app.use("/api/shares", sharesRouter);
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB Atlas", err);
  });

// Define a test route to check if the server is running
app.get("/", (req, res) => {
  console.log("Server is running");
  res.send("Server is running");
});

// Start the server
app.listen(8080, function () {
  console.log(`Listening on port ${this.address().port}`);
});
