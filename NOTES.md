
### Review Questions

**What did the above steps do? Try to put it in your own words. It's essential to learn to talk about code.**

1. Navigate to a convenient folder (e.g., Desktop).
2. Check the current Git status to ensure you are not in an existing Git repository.
3. Create a new directory called `pg-songs-api` and navigate into it.
4. Create a `.gitignore` file to specify files and folders Git should ignore.
5. Create the `server.js` file.
6. Initialize a new Node.js project with `npm init -y`, which creates a `package.json` file with default settings.
7. Create additional necessary files (`app.js`, `.env`).
8. Install essential packages (`express`, `dotenv`, `cors`).
9. Initialize a new Git repository.
10. Add all files to the staging area.
11. Commit the files with the message 'first commit'.

### `.env`

**What are acceptable port numbers?**

Acceptable port numbers range from 0 to 65535. However, ports below 1024 are reserved for well-known services (e.g., HTTP uses port 80, HTTPS uses port 443). For development purposes, ports above 1024, such as 3000, 3001, 8080, etc., are commonly used.

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
touch controllers/songsController.js
```

**Contents of `controllers/songsController.js`**:

```js
const express = require("express");
const songs = express.Router();

// INDEX
songs.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = songs;
```

The `songsController.js` file sets up a router for handling routes related to songs. The `songs.get()` method defines a route handler for GET requests to the `/` path, responding with a JSON object indicating the status. The router is then exported for use in other parts of the application.