import express from 'express';
import log from './log/logger';
import { router } from './routes/app.routes';
import swaggerUI from 'swagger-ui-express';
import * as basicAuth from 'express-basic-auth';
import { options } from './config/swagger.conf';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(options));
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8082, () => {
  log.info('Server successfully started on port 8082');
});
