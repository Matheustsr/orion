import express from 'express';
import create from './services/create';
import remove from './services/remove';
import list from './services/list';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.get('/', list);
router.delete('/remove/:id', remove);

export default router;
