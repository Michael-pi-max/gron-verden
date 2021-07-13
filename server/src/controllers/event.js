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
