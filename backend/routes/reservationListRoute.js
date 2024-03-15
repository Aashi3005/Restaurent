const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const reservation = new Reservation({
        name: req.body.name,
        dateTime: req.body.dateTime
    });

    try {
        const newReservation = await reservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (reservation == null) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        reservation.cancelled = true;
        await reservation.save();
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
