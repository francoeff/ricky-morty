import express from 'express';
import { main } from '../controller/index.js';

const router = express.Router();

router.get('/', main);

export default router;
