//DEPENDENCIES
const app = require("./app.js");

//CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

//LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


/*
server.js
What do this file and setup do?

The server.js file imports the Express application from app.js, loads environment variables using dotenv, retrieves the port number from the .env file, and starts the server to listen on the specified port, logging a message to the console.

Middleware and Route Handling


*/