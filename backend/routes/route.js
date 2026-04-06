import express from 'express'
const router = express.Router()

import TestApp from '../controllers/student/test-app.js'
import Login from '../controllers/student/login.js'

router.get('/test',TestApp);
router.post('/login',Login);

export default router;