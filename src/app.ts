import fs from 'fs';
import path from 'path';
import https from 'https';
import helmet from 'helmet';
import express from 'express';
import log from './log/logger';
import swaggerUI from 'swagger-ui-express';
import { router } from './routes/app.routes';
import { options } from './config/swagger.conf';

const app = express().disable('x-powered-by');
app.use(helmet());
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(options));
app.use('/api', router);
app.use('/', swaggerUI.serve, swaggerUI.setup(options));

if (!process.env.PORT) {
  const sslServer = https.createServer(
    {
      key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
      cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
    },
    app,
  );
  sslServer.listen(8082, () => {
    log.info('🔐 Server successfully started https://localhost:8082');
  });
} else {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    log.info('🔐 Server successfully started on port ' + PORT);
  });
}
