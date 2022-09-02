const { body, validationResult } = require('express-validator');
const axios = require('axios').default;

exports.character_list = async (req, res, next) => {
  // REMEMBER: look at the API response before printing anything out!!
  try {
    const characters = await axios.get('https://api.genshin.dev/characters');
    res.render('characters', { title: "Characters", characters: characters.data })
  } catch (err) {
    res.send(err);
  }
};

exports.character_params = (req, res, next, character) => {
  req.character = character;
  next();
}

exports.character_details = async (req, res, next) => {
  try {
    const characterDetails = await axios.get(`https://api.genshin.dev/characters/${req.character}`);
    res.render('character_details', {title: req.character, character_details: characterDetails.data});
  } catch (err) {
    res.send(err);
  }
  
};