const express = require("express");
const comics = express.Router();
// const mongoose = require("mongoose");

require("dotenv").config();

const { getComics } = require("./comicsController/getComics.js");
const {
  getSpecificComics,
} = require("./comicsController/getSpecificComics.js");

comics.get("/comics", getComics);
comics.get("/comics/:id", getSpecificComics);

module.exports = comics;
