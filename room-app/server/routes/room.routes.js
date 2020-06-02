const express = require('express');
const app = express();
const roomRoute = express.Router();

// Room model
let Room = require('../models/room');

// Add Room
// ----------------------------------------------------------------------------
roomRoute.route('/create').post((req, res, next) => {
  Room.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Rooms
// ----------------------------------------------------------------------------
roomRoute.route('/').get((req, res) => {
    Room.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single room
// ----------------------------------------------------------------------------
roomRoute.route('/read/:id').get((req, res) => {
    Room.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

roomRoute.route('/name/:name').get((req, res) => {
    Room.find({name: req.params.name}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update room
// ----------------------------------------------------------------------------
roomRoute.route('/update/:id').put((req, res, next) => {
    Room.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

roomRoute.route('/updatebyname/:name').put((req, res, next) => {
  Room.findOneAndUpdate({name: req.params.name}, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete room
// ----------------------------------------------------------------------------
roomRoute.route('/delete/:id').delete((req, res, next) => {
  Room.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = roomRoute;
