const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;

const EventSchema = new schema(
  {
    eventName: {
      type: String,
    },
    eventDescription: {
      type: String,
    },
    eventGoal: {
      type: String,
    },
    eventLogo: {
      type: String,
    },
    eventStartDate: {
      type: String,
    },
    eventEndDate: {
      type: String,
    },
    eventParticipants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    eventTotalParticipants: {
      type: Number,
    },
    eventOrganizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    isEventStarted: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model('event', EventSchema);
module.exports = Event;
