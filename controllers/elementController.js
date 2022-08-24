const { body, validationResult } = require('express-validator');

exports.element_list = (req, res, next) => {
  res.render('elements', { title: "Elements"});
};

exports.element_details = (req, res, next) => {
  res.send('GET element_details not yet implemented');
}