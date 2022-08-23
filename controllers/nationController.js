const { body, validationResult } = require('express-validator');

exports.nation_list = (req, res, next) => {
  res.render('nations', { title: "Nations"});
}