const mongoose = require('mongoose');

const redeemedUserSchema = new mongoose.Schema({
    mobile: {type: String, required: true},
    name: { type: String, required: false, default: 'NA' },
    rewardPoints: {type: Number, required: true, default: 0},
    cash: {type: Number, required: true, default: 0},
}, {timestamps: true});

const redeemedUser = mongoose.model('redeemedUsers', redeemedUserSchema, 'redeemedUsers');

module.exports = redeemedUser;