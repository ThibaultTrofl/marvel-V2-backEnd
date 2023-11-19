const axios = require("axios");
const { dynamicSort } = require("../../function/dynamicSort.js");

async function getSearchCharacters(req, res) {
  try {
    const name = req.query.name || "";
    const realPage = req.query.pageCharacters - 1;
    const skip = realPage * 100;

    const responseCharacters = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.REACTEUR_MARVEL_API}&name=${name}&skip=${skip}`
    );
    // .sort(dynamicSort("name"));

    return res.status(200).json(responseCharacters.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getSearchCharacters };
