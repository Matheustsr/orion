import express from 'express';
import create from './services/create';

const router = express.Router();

router.get('/', create);

export default router;
