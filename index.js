// Import the json-server library
const jsonServer = require('json-server');

// Create server using create function
const mediaPlayerServer = jsonServer.create();

// Create path for database.json file
const router = jsonServer.router('database.json');

// Create middleware to convert JSON into JS
const middleware = jsonServer.defaults();

// Connect - use method
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

// Set port for the server
const port = 4000 || process.env.PORT;

// Run the server
mediaPlayerServer.listen(port, () => {
    console.log('Server running successfully');
});



