import cors from 'cors';
import express from 'express';
import { connectPostgresDB } from '../database/postgres';
import { PostModel } from '../models/post';
import { MessageModel } from '../models/message';

const app = express();

app.use(cors());

(async () => {
  await connectPostgresDB();

  await PostModel.create({
    text: 'string',
    authorId: 5,
    date: new Date(),
  });

  await MessageModel.create({
    text: 'string',
    authorId: 6,
    postId: 1,
    date: new Date(),
    mainMessageId: 4,
    emojis: null,
  });

  await MessageModel.create({
    text: 'string',
    authorId: 7,
    postId: 1,
    date: new Date(),
    mainMessageId: null,
    emojis: [
      [1, 5],
      [2, 10],
    ],
  });

  const answer = await MessageModel.findAll({
    where: { id: 1 },
    attributes: ['id', 'emojis'],
  });

  // eslint-disable-next-line no-console
  console.log(77, answer[0].dataValues);
})();

export const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
export const isProductionMode = process.argv.includes('--NODE_ENV=production');
export const PORT = Number(process.env.SERVER_PORT) || 3001;

export default app;
