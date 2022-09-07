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

exports.element_params = (req, res, next, element) => {
  req.element = element;
  next();
}

exports.element_details = async (req, res, next) => {
  try {
    const elementDetails = await axios.get(`https://api.genshin.dev/elements/${req.element}`);
    res.render('element_details', { title: req.element, element_details: elementDetails.data });
  } catch (err) {
    res.send(err);
  }
}