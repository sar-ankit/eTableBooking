import express from 'express';
import{sendRervation } from "../controller/reservation.js";

const router = express.Router();
router.post('/send',sendRervation);

export default router;