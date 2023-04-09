import app, { PORT } from './app';
import { startSSR } from './ssr/index';
import { logger } from '../utils/logger';

const isDockerBuild = process.env.IS_DOCKER_BUILD === 'true';

if (isDockerBuild) {
  console.log('Собирается с помощью Docker');
} else {
  console.log('Не собирается с помощью Docker');
}

app.listen(PORT, () => {
  logger(`Server is listening on port ${PORT}`, 'info');
});

startSSR();
