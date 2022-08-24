const { body, validationResult } = require('express-validator');

exports.artifact_list = (req, res, next) => {
  res.render('artifacts', { title: "Artifacts"});
};

exports.artifact_details = (req, res, next) => {
  res.send('GET artifact_details not yet implemented');
}