const { body, validationResult } = require('express-validator');

exports.element_list = (req, res, next) => {
  res.render('elements', { title: "Elements"});
};