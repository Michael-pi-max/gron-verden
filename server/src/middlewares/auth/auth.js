const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.verifyUser = async (req, res, next) => {
	try {
		let token = null;
		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith('Bearer')
		) {
			token = req.headers.authorization.split(' ')[1];
		}
		if (!token) {
			res.status(401).json({
				status: 'error',
				message: 'You are not logged in',
			});
		}

		const { id } = await promisify(jwt.verify)(
			token,
			process.env.JWT_SECRET_KEY
		);
		req.user_id = id;
		next();
	} catch (err) {}
};
