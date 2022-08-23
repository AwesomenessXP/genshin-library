const express = require('express');
const router = express.Router();
const character_controller = require('../controllers/characterController');
const artifact_controller = require('../controllers/artifactController');
const element_controller = require('../controllers/elementController');

// home
router.get('/', (req, res, next) => {
  res.render('home', {
    title: "Genshin Impact Library",
  })
})

// characters
router.get('/characters', character_controller.character_list);

// artifacts
router.get('/artifacts', artifact_controller.artifact_list);

// elements
router.get('/elements', element_controller.element_list);

module.exports = router;