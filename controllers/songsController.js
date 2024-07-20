const express = require("express");
const songs = express.Router();

//INDEX
songs.get("/", (req, res) => {
    res.json({ status: "ok" });
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
http://localhost:3003/colors

```

Why doesn't it work yet?
Why don't you see a 404 message, either?


*/