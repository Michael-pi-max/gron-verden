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


// Routing middleware
app.use('/api/v1/users', userRouter);


app.listen(process.env.PORT, () => {
	console.log(`listening to port ${process.env.PORT}`.yellow.bold);
});
