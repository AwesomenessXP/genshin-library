const { body, validationResult } = require('express-validator');
const axios = require('axios').default;

exports.nation_list = async (req, res, next) => {
  try {
    const nations = await axios.get('https://api.genshin.dev/nations');
    res.render('nations', {
      title: "Nations",
      nations: nations.data
    })
  } catch (err) {
    res.send(err);
  }
}

exports.nation_params = (req, res, next, nation) => {
  req.nation = nation;
  next();
}

exports.nation_details = async (req, res, next) => {
  try {
    const nationDetails = await axios.get(`https://api.genshin.dev/nations/${req.nation}`);
    res.render('nation_details', {
      title: req.nation,
      nation_details: nationDetails.data
    });
    console.log(nationDetails);
  } catch (err) {
    res.send(err)
  }
}