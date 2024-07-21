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

What is middleware?
Middleware functions are functions that have access to the request object (req) and the response object (res), and the next middleware function in the applications's request-response cycle. They can execute code, modify the request and response objects, end the request-response cycle, or call the next middleware function.

What does app.use(cors()) do?
Enables Cross-Origin Resource Sharing for Express.js application. allowing it to handle requests from different origins. Enables communicaiton bet. different domains, such as bet. fron-end and back-end hosted on different servers.
 

What does app.use(express.json()) set up?
Middleware function that parses incoming requests with JSON payloads. Allows access to data in `req.body1 as a js object.

What does app.get() do?
Defines a route handler for GET requests to a specified path. When GET request is  made for that path, the specified callback funciton is executed. 

What is req short for?
Request - represents the HTTP request and contains info such as request headers, query parameter, and request body. 

What is res short for?
Reponse - represents the HTTP reponse that an Express.js app sends back to the client, allowing status codes, headers, and send data.

What is module.exports? What does it do?
It's an object that is used to export functions, objects or primitives from a Node.js module so they can be required and used in other files. Exports and makes available to other parts of app.

*/