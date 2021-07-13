const Event = require('../models/Event');
const User = require('../models/User');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const { findOne } = require('../models/Event');

exports.createEvent = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }

    const {
      eventName,
      eventDescription,
      eventGoal,
      eventStartDate,
      eventEndDate,
      eventTotalParticipants,
    } = req.body;
    const user = await User.findById(mongoose.Types.ObjectId(req.user_id));
    const event = await Event.findOne({ eventName: eventName });
    if (!event) {
      const event = await Event.create({
        eventName,
        eventDescription,
        eventGoal,
        eventStartDate,
        eventEndDate,
        eventParticipants: [],
        eventTotalParticipants,
        eventLogo: req.file.path,
        eventOrganizer: req.user_id,
      });
      res.status(201).json({ success: 'true', event });
      user.events.unshift(event._id);
      user.save();
    } else {
      res.status(400).json({ error: 'cannot create duplicate event' });
    }
  } catch (err) {}
};

exports.editEvent = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }

    const user = await User.findById(req.user_id);
    const event = await Event.findById(req.params.event_id);

    const {
      eventName,
      eventDescription,
      eventGoal,
      eventStartDate,
      eventEndDate,
      eventTotalParticipants,
    } = req.body;

    // console.log(typeof event.eventOrganizer);

    if (user._id.toString() == event.eventOrganizer) {
      Event.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(req.params.event_id) },
        {
          eventName,
          eventDescription,
          eventGoal,
          eventStartDate,
          eventEndDate,
          eventTotalParticipants,
        },
        { new: true }
      ).then((event) => {
        if (event) {
          res.status(200).json({ success: 'true', event });
        }
      });
    } else {
      res.status(400).json({ error: 'cannot edit an event, unauthorized' });
    }
  } catch (err) {}
};

exports.getEvent = async (req, res, next) => {
  try {
    Event.findById(mongoose.Types.ObjectId(req.params.event_id)).then(
      (event) => {
        if (!event) {
          res.status(400).json({ error: "can't get event" });
        }
        res.status(200).json({ event });
      }
    );
  } catch (err) {}
};

exports.getAllEvents = async (req, res, next) => {
  try {
    Event.find()
      .then((events) => {
        res.status(200).json({ events });
      })
      .catch((err) => {
        res.status(404).json({ error: "can't get events" });
      });
  } catch (err) {
    res.status(404).json({ error: "can't get events" });
  }
};

exports.applyEvent = async (req, res, next) => {
  const event = await Event.findById(
    mongoose.Types.ObjectId(req.params.event_id)
  );
  try {
    User.findById(mongoose.Types.ObjectId(req.user_id)).then((user) => {
      if (user._id == event.eventOrganizer) {
        res
          .status(400)
          .json({ error: "you can't apply the event you created" });
      }
      if (!event.eventParticipants.includes(user._id)) {
        event.eventParticipants.unshift(user._id);
        event.save();
        res.status(200).json({ event });
        user.events.unshift(event._id);
        user.save();
      }
      res.status(400).json({ error: 'you have already applied for the event' });
    });
  } catch (err) {}
};
