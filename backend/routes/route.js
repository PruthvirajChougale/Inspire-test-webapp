import express from 'express'
const router = express.Router()

import TestApp from '../controllers/student/test-app.js';
import { login, signup, logout } from "../controllers/student/authcontroller.js";
import { protectroute } from '../middlewares/authmiddleware.js';

router.get('/test',TestApp);
router.post('/signup', signup);
router.post('/login',protectroute, login);
router.post('/logout', logout);

export default router;