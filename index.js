// Place your server entry point code here
// Serve static HTML files
app.use(express.static('./public'));

var express = require("express")
var app = express()

const db = require("./database.js")
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Server port
var HTTP_PORT = argv['port'] || 5555

// Start server
const server = app.listen(HTTP_PORT, () => {
   console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});