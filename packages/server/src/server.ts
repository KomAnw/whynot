import app, { PORT } from './app';
import { startSSR } from './ssr/index';
import { logger } from '../utils/logger';

const { IS_DOCKER_BUILD } = process.env;

const isDockerBuild = Boolean(IS_DOCKER_BUILD);

if (isDockerBuild) {
  logger('Собирается с помощью Docker');
} else {
  logger('Не собирается с помощью Docker');
}

app.listen(PORT, () => {
  logger(`Server is listening on port ${PORT}`, 'info');
});

startSSR();
