import cors from 'cors';
import express from 'express';
import { connectPostgresDB } from '../database/postgres';
import { Post } from '../models/post';
import { Message } from '../models/message';

const app = express();

app.use(cors());
connectPostgresDB().then(async () => {
  await Post.create({
    text: 'string',
    author_id: 5,
    date: new Date(),
  });

  await Message.create({
    text: 'string',
    author_id: 6,
    post_id: 1,
    date: new Date(),
    main_message_id: 4,
    emojis: null,
  });

  await Message.create({
    text: 'string',
    author_id: 7,
    post_id: 1,
    date: new Date(),
    main_message_id: null,
    emojis: [
      [1, 5],
      [2, 10],
    ],
  });

  const answer = await Message.findAll({
    where: {
      id: 1,
    },
    attributes: ['id', 'emojis'],
  });

  // eslint-disable-next-line no-console
  console.log(77, answer);
});

export const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
export const isProductionMode = process.argv.includes('--NODE_ENV=production');
export const PORT = Number(process.env.SERVER_PORT) || 3001;

export default app;
