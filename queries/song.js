const db = require("../db/dbConfig.js");

//sql query

const getAllSongs = async () => {
    try {
      const allSongs = await db.any("SELECT * FROM songs");
      return allSongs;
    } catch (error) {
      return error;
    }
  };


module.exports = { getAllSongs };

/*

.any() will accept any return from the database, no rows, one row, or many rows of data.

*/