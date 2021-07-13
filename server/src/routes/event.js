const express = require('express');
const eventValidation = require('../middlewares/validation/event');
const eventController = require('../controllers/event');
const { verifyUser } = require('../middlewares/auth/auth');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/event/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimeType === 'image/jpeg' || file.mimeType === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024,
  },
});

// Create an event - POST
router.post(
  '/new',
  verifyUser,
  upload.single('eventLogo'),
  eventValidation.validate('CREATE'),
  eventController.createEvent
);

// Edit an event - PUT
router.put(
  '/:event_id',
  verifyUser,
  upload.single('eventLogo'),
  eventValidation.validate('EDIT'),
  eventController.editEvent
);

// Get single event - GET
router.get('/:event_id', verifyUser, eventController.getEvent);

// Get all event - GET
router.get('/all', verifyUser, eventController.getAllEvents);

router.post('/apply/:event_id', verifyUser, eventController.applyEvent);

module.exports = router;
