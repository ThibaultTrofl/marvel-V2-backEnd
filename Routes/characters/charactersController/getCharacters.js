const axios = require("axios");

async function getCharacters(req, res) {
  try {
    const name = req.query.name || "";
    const realPage = req.query.page - 1;
    const skip = realPage * 100;
    const responseCharacters = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.REACTEUR_MARVEL_API}&name=${name}&skip=${skip}`
    );
    return res.status(200).json(responseCharacters.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getCharacters };
