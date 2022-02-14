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
app.use('/', swaggerUI.serve, swaggerUI.setup(options));

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  log.info('Server successfully started on port ' + PORT);
});
