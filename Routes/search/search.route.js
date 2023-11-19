const express = require("express");
const search = express.Router();
// const mongoose = require("mongoose");

require("dotenv").config();

const { getSearchCount } = require("./searchController/getSearchCount.js");
const { getSearch } = require("./searchController/getSearch.js");
const {
  getSearchCharacters,
} = require("./searchController/getSearchCharacters.js");
const { getSearchComics } = require("./searchController/getSearchComics.js");

search.get("/search/count", getSearchCount);
search.get("/search", getSearch);
search.get("/search/characters", getSearchCharacters);
search.get("/search/comics", getSearchComics);

module.exports = search;
