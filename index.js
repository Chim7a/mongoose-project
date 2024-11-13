import dotenv from "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: Array.String,
  },
});

// defining the name of the collection.
const Person = new mongoose.model("Person", personSchema);

// Create and save record

// Connect to database
async function connectDB(params) {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Listening to server at port " + port);
  } catch (error) {
    console.log(error);
  }
}

// Listening to server
app.listen(port, () => {
  connectDB();
});
