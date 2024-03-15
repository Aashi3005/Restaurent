import express from "express";
import {send_reservation , get_Reservation} from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);
router.get("/staff", get_Reservation);

export default router;
