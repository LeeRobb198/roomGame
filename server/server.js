let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');
let dbConfig = require('./database/db');

var morgan = require('morgan');

// Connect database to server 
// ----------------------------------------------------------------------------

mongoose.connect('mongodb+srv://LeeRobb198:RobbiePass98@room-fagn0.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => {
    console.log('Database successfully connected');
    },
    error => {
    console.log('Database could not connect: ' + error);
    }
   )

// Setting up port with express js
// ----------------------------------------------------------------------------

const roomRoute = require('./routes/room.routes');
const app = express();

app.use(morgan('dev')); // Logs to server

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'dist/room-app')));
// app.use('/', express.static(path.join(__dirname, 'dist/room-app')));
app.use('/api', roomRoute);

// Create port
// ----------------------------------------------------------------------------

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
// ----------------------------------------------------------------------------

// var createError = require('createerror');

// app.use((req, res, next) => {
//     next(createError(404));
// });

// Error handler
// ----------------------------------------------------------------------------

// app.use(function (err, req, res, next) {
//     console.error(err.message); // Log error message in our server's console
//     if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
//     res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so send back an error with its status code and message
// });