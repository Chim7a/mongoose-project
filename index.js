import dotenv from "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    favoriteFoods: {
      type: Array,
    },
  },
  {
    Timestamp: true,
  }
);

// defining the name of the collection.
const Person = new mongoose.model("Person", personSchema);

// Create and save record
async function createPersonRecord() {
  const createPerson = await Person.create(
    {
      name: "Alice",
      age: 29,
      favoriteFoods: ["Pizza", "Sushi", "Chocolate"],
    },
    {
      name: "Bob",
      age: 34,
      favoriteFoods: ["Burgers", "Fries", "Ice Cream"],
    },
    {
      name: "Charlie",
      age: 42,
      favoriteFoods: ["Steak", "Potatoes", "Salad"],
    },
    {
      name: "Diana",
      age: 25,
      favoriteFoods: ["Pasta", "Tacos", "Avocados"],
    },
    {
      name: "Eva",
      age: 31,
      favoriteFoods: ["Sushi", "Ramen", "Gyoza"],
    },
    {
      name: "Frank",
      age: 45,
      favoriteFoods: ["Bacon", "Eggs", "Toast"],
    },
    {
      name: "Grace",
      age: 27,
      favoriteFoods: ["Smoothies", "Salads", "Granola"],
    },
    {
      name: "Hank",
      age: 52,
      favoriteFoods: ["Lobster", "Shrimp", "Clams"],
    },
    {
      name: "Ivy",
      age: 33,
      favoriteFoods: ["Vegan Burritos", "Quinoa", "Tofu"],
    },
    {
      name: "James",
      age: 29,
      favoriteFoods: ["Steak", "Mac & Cheese", "Mashed Potatoes"],
    },
    {
      name: "Kelly",
      age: 38,
      favoriteFoods: ["Chicken Wings", "Pizza", "Buffalo Cauliflower"],
    },
    {
      name: "Liam",
      age: 22,
      favoriteFoods: ["Fries", "Milkshakes", "Hot Dogs"],
    },
    {
      name: "Maya",
      age: 37,
      favoriteFoods: ["Indian Curry", "Naan", "Tandoori Chicken"],
    },
    {
      name: "Nathan",
      age: 50,
      favoriteFoods: ["BBQ Ribs", "Cornbread", "Coleslaw"],
    },
    {
      name: "Olivia",
      age: 40,
      favoriteFoods: ["Sushi", "Poke Bowls", "Seaweed Snacks"],
    },
    {
      name: "Paul",
      age: 28,
      favoriteFoods: ["Fried Chicken", "Mac & Cheese", "Collard Greens"],
    },
    {
      name: "Quinn",
      age: 23,
      favoriteFoods: ["Spaghetti", "Garlic Bread", "Caesar Salad"],
    },
    {
      name: "Rachel",
      age: 26,
      favoriteFoods: ["Bagels", "Lox", "Cream Cheese"],
    },
    {
      name: "Sam",
      age: 41,
      favoriteFoods: ["BBQ Chicken", "Corn on the Cob", "Grilled Veggies"],
    },
    {
      name: "Tina",
      age: 35,
      favoriteFoods: ["Salmon", "Avocado Toast", "Lemon Sorbet"],
    }
  );
  console.log(createPerson);
  console.log("Person Document added successful.");
}

// Find all the people having a given name
async function findDocByName() {
  const allDocsByName = await Person.find();
  console.log(allDocsByName);
}

// Find just one person which has a certain food in the person's favorites, using Model.findOne()
async function findDocByFavFood(inputFavFood) {
  const personFavFood = await Person.findOne({
    favoriteFoods: `${inputFavFood}`,
  });
  console.log(personFavFood);
  console.log("Favorite food successfully added");
}

// Use model.findById() to Search Your Database By _id
async function findDocById(personId) {
  const result = await Person.findById(`${personId}`);
  console.log(result);
  console.log("Search by ID successfull");
}

// Perform New Updates on a Document Using model.findOneAndUpdate()
async function updateOnePerson(updateName) {
  const result = await Person.findOneAndUpdate(
    { name: `${updateName}` },
    { age: 90 },
    { new: true }
  );
  console.log(result);
}

// Connect to database
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // console.log(createPersonRecord());
    // console.log(findDocByName());
    // console.log(findDocByFavFood("Tacos"));
    // console.log(findDocById("6734aefeaa222a422214d0d8"));
    // console.log(updateOnePerson("John Doe"));

    console.log("Listening to server at port " + port);
  } catch (error) {
    console.log(error);
  }
}

// Listening to server
app.listen(port, () => {
  connectDB();
});
