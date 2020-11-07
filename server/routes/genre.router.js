const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "movies"
 `;

  pool.query(queryText).then((result) => {
    console.log(result.rows);
    res.send(result.rows);

  }) .catch( (error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
});

});
module.exports = router;