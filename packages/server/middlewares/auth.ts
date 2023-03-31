import type { Request, Response, NextFunction } from 'express';

const authMiddleware = ({ cookies }: Request, res: Response, next: NextFunction) => {
  const { authCookie, uuid } = cookies;

  if (!authCookie || !uuid) {
    res.status(401).json({ message: 'Unauthorized user' });
  } else {
    next();
  }
};

export default authMiddleware;
