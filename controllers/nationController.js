const { body, validationResult } = require('express-validator');

exports.nation_list = (req, res, next) => {
  res.render('nations', { title: "Nations"});
}

exports.nation_details = (req, res, next) => {
  res.send('GET nation_details not yet implemented');
}