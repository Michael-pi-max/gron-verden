const Event = require('../models/Event');
const User = require('../models/User');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

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

    const event = await Event.create({
      eventName,
      eventDescription,
      eventGoal,
      eventStartDate,
      eventEndDate,
      eventTotalParticipants,
      eventLogo: req.file.path,
    });

    res.status(201).json({ success: 'true', event });
  } catch (err) {}
};

exports.getAllEvent = async (req, res, next) => {
  try {
    Event.find().then((events) => {
      res.status(200).json({ events });
    });
  } catch (err) {}
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
