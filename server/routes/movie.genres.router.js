const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
    const queryText= `SELECT * FROM "movies"
    JOIN "movie_genres" ON "movie_genres"."movie_id" = "movies"."id"
    JOIN "genres" ON "movie_genres"."genre_id" = "genres"."id";`
    pool.query(queryText).then((result)=>{
      console.log(result.rows);
      res.sendStatus(result.rows);
    })
    
  });
  


module.exports = router;