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

exports.nation_details = (req, res, next) => {
  res.send('GET nation_details not yet implemented');
}