const axios = require("axios");
const { renameKeyName } = require("../../function/renameKeyName.js");
const { dynamicSort } = require("../../function/dynamicSort.js");

async function getSearch(req, res) {
  try {
    const name = req.query.name || "";

    const responseComics = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.REACTEUR_MARVEL_API}&title=${name}`
    );
    const responseCharacters = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.REACTEUR_MARVEL_API}&name=${name}`
    );

    const total = responseComics.data.count + responseCharacters.data.count;
    const renameKeyTitle = renameKeyName(responseComics.data.results);
    const concatArray = renameKeyTitle
      .concat(responseCharacters.data.results)
      .sort(dynamicSort("name"));
    return res.status(200).json({
      count: total,
      concatArray,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getSearch };
