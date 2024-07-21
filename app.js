//DEPENDENCIES
const cors = require("cors");
const express = require("express");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES    
app.get("/", (req, res) => {
    res.send("Welcome to my Music Playlist!");
});

//Songs Routes - localhost:PORT/songs - Get a list (or index) of all songs
const songsController = require("./controllers/songsController.js");
app.use("/songs", songsController);


//404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});


//EXPORT
module.exports = app;

/*

### Review Questions
Memorize answers:


### `app.js`

**What does this file and setup do?**

The `app.js` file sets up an Express application with CORS and JSON middleware, defines a basic route for the root URL (`/`), and exports the configured app.

### `server.js`

**What do this file and setup do?**

The `server.js` file imports the Express application from `app.js`, loads environment variables using `dotenv`, retrieves the port number from the `.env` file, and starts the server to listen on the specified port, logging a message to the console.

### Middleware and Route Handling

**What is middleware?**

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. They can execute code, modify the request and response objects, end the request-response cycle, and call the next middleware function.

**What does `app.use(cors())` do?**

The `app.use(cors())` middleware enables Cross-Origin Resource Sharing (CORS), allowing your server to accept requests from different origins (domains).

**What does `app.use(express.json())` set up?**

The `app.use(express.json())` middleware parses incoming JSON requests and makes the parsed data available in `req.body`.

**What does `app.get()` do?**

The `app.get()` method defines a route handler for GET requests to the specified path. In this case, it handles GET requests to the root URL (`/`).

**What is `req` short for?**

`req` is short for `request`. It represents the HTTP request and contains information about the request, such as the request headers, query parameters, and body.

**What is `res` short for?**

`res` is short for `response`. It represents the HTTP response that an Express app sends when it receives an HTTP request.

**What is `module.exports`? What does it do?**

`module.exports` is a special object that is used to export functions, objects, or primitives from a given file or module. In this case, it exports the Express app instance so that it can be required and used in other files, such as `server.js`.

### songs Controller

1. **Open a new terminal tab** to continue working without shutting down the server.

**Terminal Commands**:

```bash
mkdir controllers
touch controllers/songssController.js
```

**Contents of `controllers/songssController.js`**:

```js
const express = require("express");
const songss = express.Router();

// INDEX
songss.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = songss;
```

The `songssController.js` file sets up a router for handling routes related to songss. The `songss.get()` method defines a route handler for GET requests to the `/` path, responding with a JSON object indicating the status. The router is then exported for use in other parts of the application.
*/





/*
Why name the route `/songs`?
Reflects the resource being managed - type of data and functionality/endpoint. Handles all the requests related to songs, making it intuitive and organized. When there is a RESTful API, it's common practice to name routes based on the resources they manage. eg. `/users` for user-reated operations, `/posts` for post-related operations.

What would happen if you put this code above the middleware setup?
Lead ot unexpected behavior such as middlewarefuncitons not applying ot those route. CORS erros, Parsing issues.


```
// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
// These should be set up before defining any routes to ensure they apply to all routes.
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(express.json()); // Parses incoming requests with JSON payloads

// ROUTES    
app.get("/", (req, res) => {
    res.send("Welcome to my Music Playlist!"); // Root route, sends a welcome message
});

// Songs Routes - localhost:PORT/songs - Get a list (or index) of all songs
const songsController = require("./controllers/songsController.js");
app.use("/songs", songsController); // Uses the songsController for any /songs routes

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found"); // Catches all undefined routes and responds with a 404 message
});

// EXPORT
module.exports = app; // Exports the app for use in other files (e.g., starting the server)


```


*/