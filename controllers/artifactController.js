const { body, validationResult } = require('express-validator');
const axios = require('axios').default

exports.artifact_list = async (req, res, next) => {
  try {
    const artifacts = await axios.get('https://api.genshin.dev/artifacts');
    // REMEMBER: look at the API response before printing anything out!!
    res.render('artifacts', {
      title: "Artifacts",
      artifacts: artifacts.data
    })
  } catch (err) {
    res.send(err);
  }
};

exports.artifact_params = (req, res, next, artifact) => {
  req.artifact = artifact;
  next();
}

exports.artifact_details = async (req, res, next) => {
  try {
    const artifact_details = await axios.get(`https://api.genshin.dev/artifacts/${req.artifact}`);
    res.render('artifact_details', { title: req.artifact, artifact_details: artifact_details.data });
  } catch (err) {
    res.send(err);
  }
}