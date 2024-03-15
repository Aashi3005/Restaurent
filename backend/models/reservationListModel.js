const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: String,
    dateTime: Date,
    cancelled: { type: Boolean, default: false }
});

module.exports = mongoose.model('Reservation', reservationSchema);
