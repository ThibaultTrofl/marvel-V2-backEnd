const axios = require("axios");

async function getComics(req, res) {
  try {
    const realPage = req.query.page - 1;
    const skip = realPage * 100;
    const responseComics = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.REACTEUR_MARVEL_API}&skip=${skip}`
    );
    return res.status(200).json(responseComics.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getComics };
