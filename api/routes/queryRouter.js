import express from 'express';
import {test} from '../controllers/twitterController'
const router = express.Router();

router.get('/', test);

export default router;