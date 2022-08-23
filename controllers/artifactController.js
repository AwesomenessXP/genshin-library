const { body, validationResult } = require('express-validator');

exports.artifact_list = (req, res, next) => {
  res.render('artifacts', { title: "Artifacts"});
};