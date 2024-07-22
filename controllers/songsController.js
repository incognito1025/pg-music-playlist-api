const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/song");

//INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
        res.status(200).json(allSongs);
    } else {
        res.status(500).json({ error: "server error" });
    }
});


//SHOW
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (song) {
        res.json(song);
    } else {
        res.status(404).json({error: "not found"});
    }
});


module.exports = songs;


/*
Review Questions:


```
const express = require("express");
const songs = express.Router();

//INDEX
songs.get("/", (req, res) => {
    res.json({ status: "ok" });
});


module.exports = songs;
```

What URL must one go to to see this message?

```
http://localhost:{PORT}/songs

```

Why doesn't it work yet?
The `songs` router needs to be used in the main Express app.

Why don't you see a 404 message, either?
The main Express app isn't set up to use the `songs` router. The request  wont reach the defined router, so no reponse (inc. 404) will be sent back.

To make things work, server.js needs to be set up and start Express server and use `song1 router.  In server.js - import use use songs router

```
const express = require("express");
const app = express();
const songs = require("./path/to/songs"); // Adjust the path as necessary

// Use the songs router
app.use("/songs", songs);

// Start the server
const PORT = process.env.PORT || 3000; // Or any other port number
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


```


*/