const express = require('express');
const router = express.Router();
const character_controller = require('../controllers/characterController');
const artifact_controller = require('../controllers/artifactController');
const element_controller = require('../controllers/elementController');
const nation_controller = require('../controllers/nationController');

// home
router.get('/', (req, res, next) => {
  res.render('home', {
    title: "Genshin Impact Library",
  });
});

// ------------------ NAV BAR CONTENT -------------------------------

// characters
router.get('/characters', character_controller.character_list);

// artifacts
router.get('/artifacts', artifact_controller.artifact_list);

// elements
router.get('/elements', element_controller.element_list);

// nations
router.get('/nations', nation_controller.nation_list);

// ------------------- DETAILS OF THE PAGE ----------------------------

// characters
router.param('character', character_controller.character_params);
router.get('/characters/:character', character_controller.character_details);

// artifacts
router.param('artifact', artifact_controller.artifact_params);
router.get('/artifacts/:artifact', artifact_controller.artifact_details);

// elements
router.param('element', element_controller.element_params);
router.get('/elements/:element', element_controller.element_details);

// nations
router.param('nation', nation_controller.nation_params);
router.get('/nations/:nation', nation_controller.nation_details);

module.exports = router;