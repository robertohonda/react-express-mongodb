import express from "express";
import UserModel from '../models/user'

const router = express.Router();

router.route('/').get((req, res) => res.json({ message: "user" }))

export default router;
