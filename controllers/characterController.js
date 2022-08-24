const { body, validationResult } = require('express-validator');
const axios = require('axios').default;

exports.character_list = (req, res, next) => {
  axios.get('https://api.genshin.dev/characters')
    // REMEMBER: look at the API response before printing anything out!!
    .then(response => res.render('characters', { title: "Characters", genshin_data: response.data }))
    .catch(err => res.send(err));
  // res.render('characters', { title: "Characters"});
};

exports.character_details = (req, res, next) => {
  res.send('GET character_details not yet implemented');
};