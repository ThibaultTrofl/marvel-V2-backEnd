const axios = require("axios");

async function getSearchCount(req, res) {
  try {
    const name = req.query.name || "";

    const responseComics = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.REACTEUR_MARVEL_API}&title=${name}`
    );
    const responseCharacters = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.REACTEUR_MARVEL_API}&name=${name}`
    );

    const total = responseComics.data.count + responseCharacters.data.count;
    return res
      .status(200)
      .json({
        total,
        comics: responseComics.data.count,
        characters: responseCharacters.data.count,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getSearchCount };
