const axios = require("axios");

async function getSpecificComics(req, res) {
  try {
    const id = req.params.id;
    const responseComic = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.REACTEUR_MARVEL_API}`
    );
    return res.status(200).json(responseComic.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getSpecificComics };
