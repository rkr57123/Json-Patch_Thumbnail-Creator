// Require packages and set the port
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(function (req,res,next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
})

app.use(require('./routes'));

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});