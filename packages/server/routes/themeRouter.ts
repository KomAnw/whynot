import { Router } from 'express';
import themeController from '../controllers/themeController';

const router = new (Router as any)();

/*
 * router.post("/registration", themeController.registration);
 * router.post("/login", UserController.login);
 * router.get("/auth", authMiddleware, UserController.check);
 */

router.get('/', themeController.get);
/*
 * router.put("/:id", themeController.updateOne);
 * router.delete("/:id", themeController.deleteOne);
 */

export default router;
