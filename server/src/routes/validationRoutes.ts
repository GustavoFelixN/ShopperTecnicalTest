import express from 'express';
import { validateCodes } from '../controllers/validationController';

const router = express.Router();

router.get('/validate', validateCodes);

export default router;
