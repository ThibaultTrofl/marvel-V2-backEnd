const express = require("express");
const characters = express.Router();

// const mongoose = require("mongoose");

require("dotenv").config();

const { getCharacters } = require("./charactersController/getCharacters.js");
const {
  getSpecificCharacters,
} = require("./charactersController/getSpecificCharacters.js");

characters.get("/characters", getCharacters);
characters.get("/characters/:id", getSpecificCharacters);

module.exports = characters;
