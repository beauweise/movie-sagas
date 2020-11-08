const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



router.get('/:id', (req, res) => {
  console.log(req.params.id);
  
  const queryText = `SELECT * FROM "movies"
  JOIN "movie_genres" ON "movie_genres"."movie_id" = "movies"."id"
  JOIN "genres" ON "movie_genres"."genre_id" = "genres"."id"
  WHERE "movie_id" = ${req.params.id}
 `;

  pool.query(queryText).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });

});
router.get('/', (req, res) => {
  console.log(req.params.id);
  
  const queryText = `SELECT * FROM "genres"`;

  pool.query(queryText).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });

});

module.exports = router;