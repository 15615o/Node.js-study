const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({});
        res.render('mongoose', { users });
    } catch {
        console.error(err);
        next(err);
    }
});

module.exports = router;