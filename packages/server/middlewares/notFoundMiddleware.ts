import type { Request, Response } from 'express';

const notFoundMiddleware = (_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
};

export default notFoundMiddleware;
