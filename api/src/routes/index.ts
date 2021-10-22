import express from 'express'
import deploy from './deploy';

const router = express.Router()

router.use('/deploy', deploy)

export default router