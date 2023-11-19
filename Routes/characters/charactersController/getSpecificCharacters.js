const axios = require("axios");

async function getSpecificCharacters(req, res) {
  try {
    const id = req.params.id;

    const SpecificCharacter = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.REACTEUR_MARVEL_API}`
    );
    return res.status(200).json(SpecificCharacter.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getSpecificCharacters };
