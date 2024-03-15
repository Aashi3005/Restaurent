import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

export const get_Reservation = (req, res) => {
  Reservation.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
};
export const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    console.log(error)
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


// export default {send_reservation, get_Reservation};
