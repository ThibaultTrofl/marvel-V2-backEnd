const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const cors = require("cors");
// const cloudinary = require("cloudinary").v2;

require("dotenv").config();

app.use(express.json());
app.use(cors());

// mongoose.connect(process.env.MONGODB_URI);

const CharactersRoutes = require("./Routes/characters/characters.route.js");
app.use(CharactersRoutes);

const ComicsRoutes = require("./Routes/comics/comics.route.js");
app.use(ComicsRoutes);

const SearchRoutes = require("./Routes/search/search.route.js");
app.use(SearchRoutes);

app.get("/", (req, res) => {
  res.json("Ok");
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found 😢" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started 🚀");
});
