const db = require("../db/dbConfig.js");

//sql query for ALL songs
const getAllSongs = async () => {
    try {
      const allSongs = await db.any("SELECT * FROM songs");
      return allSongs;
    } catch (error) {
      return error;
    }
  };

  //ONE song
  const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return oneSong;
    } catch (error) {
        return error;
    }
  };

 //CREATE song
 const createSong = async (song) => {
    try {
        const newSong = await db.one(
            "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [song.name, song.artist, song.albumn, song.time, song.is_favorite]
        );
        return newSong;
    } catch (error) {
        throw error;
    }
  };

  


module.exports = { 
    getAllSongs,
    getSong,
    createSong,
};

/*

.any() will accept any return from the database, no rows, one row, or many rows of data.

//alternate to: 
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
        ```
        await db.one("SELECT * FROM colors WHERE id=$[id]", {
  id: id,
});
        ```
*/