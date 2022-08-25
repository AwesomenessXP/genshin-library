const { body, validationResult } = require('express-validator');
const axios = require('axios').default;

exports.element_list = async (req, res, next) => {
  try {
    const elements = await axios.get('https://api.genshin.dev/elements');
    res.render('elements', {
      title: "Elements",
      elements: elements.data
    });
  } catch (err) {
    res.send(err);
  }
};

exports.element_details = (req, res, next) => {
  res.send('GET element_details not yet implemented');
}