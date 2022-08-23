const { body, validationResult } = require('express-validator');

exports.character_list = (req, res, next) => {
  res.render('characters', { title: "Characters"});
};

exports.character_details = (req, res, next) => {
  res.send('GET character_details not yet implemented');
}