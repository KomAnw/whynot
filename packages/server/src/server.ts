import app, { PORT } from './app';
import { startSSR } from './ssr/index';
import { logger } from '../utils/logger';

app.listen(PORT, () => {
  logger(`Server is listening on port ${PORT}`, 'info');
});

startSSR();
