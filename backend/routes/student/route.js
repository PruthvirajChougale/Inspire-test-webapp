import express from 'express'
const router = express.Router()

import {addUser} from '../../controllers/student/test-app.js';
//import { login, signup, logout } from "../controllers/student/authcontroller.js";
// import { get_tests } from '../controllers/student/test.js';
// import { protectroute } from '../middlewares/authmiddleware.js';

router.post('/test',addUser);
// router.post('/signup', signup);
// router.post('/login',protectroute, login);
// router.post('/logout', logout);
// router.get('/test/:label', protectroute, get_tests);
export default router;