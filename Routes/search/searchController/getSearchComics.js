const axios = require("axios");
const { dynamicSort } = require("../../function/dynamicSort.js");

async function getSearchComics(req, res) {
  try {
    const name = req.query.name || "";
    const realPage = req.query.pageComics - 1;
    const skip = realPage * 100;

    const responseComics = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.REACTEUR_MARVEL_API}&title=${name}&skip=${skip}`
    );
    // .sort(dynamicSort("title"));

    return res.status(200).json(responseComics.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getSearchComics };
