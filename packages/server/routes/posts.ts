import { Router } from 'express';
import { postPost } from '../controllers/posts';

export const router = Router();

router.post('/', postPost);
