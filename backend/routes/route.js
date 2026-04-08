import express from 'express'
const router = express.Router()

import TestApp from '../controllers/student/test-app.js';
import { login, signup, logout } from "../controllers/student/authcontroller.js";

router.get('/test',TestApp);
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;