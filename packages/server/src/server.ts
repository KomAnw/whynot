import app, { PORT } from './app';
import { startSSR } from './ssr/index';

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

startSSR();
