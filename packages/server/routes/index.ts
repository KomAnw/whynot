import { Router } from 'express';
import themeRouter from './themeRouter';

const router = new (Router as any)();

router.use('/theme', themeRouter);

export default router;
