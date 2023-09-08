import express from 'express';
import { updateProductPrice } from '../controllers/uptadeController';

const router = express.Router();

router.put('/update', updateProductPrice);

export default router;
