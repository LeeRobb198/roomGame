const mongoose = require('mongoose');

// Define collection and schema -----------------------------------------------

const RoomSchema = mongoose.Schema({
    name: {type: String},
    up: {type: String},
    down: {type: String},
    left: {type: String},
    right: {type: String},
    items: {type: Array}
});

module.exports = mongoose.model('Room', RoomSchema);