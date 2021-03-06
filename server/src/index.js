const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const color = require('colors');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();

// Importing routes
const userRouter = require('./routes/user');
const plantRouter = require('./routes/plant');
const shopRouter = require('./routes/shop');
const eventRouter = require('./routes/event');
// Connecting to database
mongoose
  .connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}`, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database successfully'.blue.bold);
  });

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

// middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads/', express.static('uploads'));

// Routing middleware
app.use('/api/v1/users', userRouter);
app.use('/api/v1/plants', plantRouter);
app.use('/api/v1/shops', shopRouter);
app.use('/api/v1/events', eventRouter);

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`.yellow.bold);
});
