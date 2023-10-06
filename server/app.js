//importing required dependencies.
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

//configuring dotenv, instantiating express, applying middlewares to parse incoming data, and enabling cors policy.
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//importing private credentials from dotenv file.
const PORT = process.env.PORT || 8080;
const MongoURI = process.env.MONGO_URI;

//importing routes.
import taskRoutes from './Routes/taskRoutes.js';
app.use('/api', taskRoutes);

//Connecting to database and activating server.
mongoose
  .connect(MongoURI, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server and Database active on port : ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
