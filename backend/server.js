
// import express framework, connection to db function, dotenv to import env variables and product routes
import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from "./routes/product.routes.js"

// load environment variables from .env and initialize the express app
dotenv.config();
const app = express();

// allows to accept json data in req.body
app.use(express.json());

// set up product routes consider /api/product
// for CRUD requests
app.use("/api/product", productRoutes)

console.log(process.env.MONGO_URI);

// server listens on port 5000
app.listen(5000, () => {
    // connect to database when server starts
    connectDB();
    console.log("Server started at http://localhost:5000");
});
