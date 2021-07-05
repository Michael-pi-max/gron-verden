const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {
    validationResult
} = require('express-validator');

const getToken = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.login = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                status: "error",
                message: errors.array()[0].msg
            })
        }

        const user = await User.findOne({
            email: req.body.email
        }).select("+password")

        if (!user || !(await user.verifyPassword(req.body.password, user.password))) {
            res.status(401).json({
                status: "error",
                message: "Invalid email or password"
            })
        }

        const token = getToken(user._id);
        res.status(201).json({
            status: "success",
            token,
            user
        })
    } catch (err) {

    }
}

exports.register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                status: "error",
                message: errors.array()[0].msg
            })
        }
        const user = await User.create(req.body);
        const token = getToken(user._id);
        res.status(201).json({
            status: "success",
            token,
            user
        })
    } catch (err) {

    }
}