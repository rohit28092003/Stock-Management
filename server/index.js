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
app.use((_req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
  next();
})
app.use(
  cors({
    origin: "*", // Allow frontend app to connect
    credentials:true,
  })
);

app.use(express.json());

// Fetch Mongo URI from environment variable (stored in .env file)
// const MONGO_URI = process.env.mongodburl;
const MONGO_URI="mongodb://localhost:27017/"
// Connect to MongoDB Atlas using Mongoose
mongoose
  .connect(process.env.mongodburl, {
    useNewUrlParser: true,   // Use the new URL parser
    useUnifiedTopology: true, // Use the unified topology engine
  })
  .then(async () => {
    console.log("Connected to MongoDB Atlas");

    // Once connected, set up the routes
    const db = mongoose.connection; // Access the mongoose connection
    try {
      // Reference the 'shares' collection
      const sharesCollection = db.collection("shares");

      // Check if the collection exists by attempting a find or an insert
      const count = await sharesCollection.countDocuments();
      console.log(`Shares collection exists with ${count} documents.`);

      // If no documents exist, insert dummy data
      if (count === 0) {
        await sharesCollection.insertOne({ name: "Dummy Share", price: 100 });
        console.log("Dummy data inserted into 'shares' collection.");
      }

      // Proceed to create the router
      const sharesRouter = createRouter(sharesCollection);
      app.use("/api/shares", sharesRouter);

    } catch (error) {
      console.error("Error handling the 'shares' collection:", error);

      // Optional: Manually create the collection if it doesn't exist
      await db.createCollection("shares");
      console.log("Created 'shares' collection manually.");
    }
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
const port = 4000
app.listen(port, ()=>{
  console.log(`listening on ${port}`)
}
);
