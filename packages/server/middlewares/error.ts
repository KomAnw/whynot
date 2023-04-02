import type { Request, Response } from 'express';

const errorBadRequest = (_req: Request, res: Response) => {
  res.status(404).json({ message: 'Bad Request' });
};

export default errorBadRequest;
