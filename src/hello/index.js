import express from 'express';
import main from './services/main';

const router = express.Router();

router.get('/oi', main);
export default router;
