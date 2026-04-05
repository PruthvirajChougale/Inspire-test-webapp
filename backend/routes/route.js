import express from 'express'
const router = express.Router()

import TestApp from '../controllers/student/test-app.js'

router.get('/test',TestApp);

export default router;