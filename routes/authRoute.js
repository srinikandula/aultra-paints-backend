const express = require('express');
const router = express.Router();
const passport = require('passport');

const AuthController = require('../controllers/authController')


router.post('/login', passport.authenticate('local', {session: false}), async (req, res) => {
    await AuthController.login(req, result => {
        res.status(result.status).json(result);
    })
});

router.post('/register', async (req, res) => {
    await AuthController.register(req, result => {
        res.status(result.status).json(result);
    })
});

module.exports = router;
