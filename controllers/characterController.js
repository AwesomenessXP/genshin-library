const { body, validationResult } = require('express-validator');
const axios = require('axios').default;

exports.character_list = async (req, res, next) => {
  try {
    const characters = await axios.get('https://api.genshin.dev/characters');
    // REMEMBER: look at the API response before printing anything out!!
    res.render('characters', { title: "Characters", characters: characters.data })
  } catch (err) {
    res.send(err)
  }
};

exports.character_details = (req, res, next) => {
  res.send('GET character_details not yet implemented');
};