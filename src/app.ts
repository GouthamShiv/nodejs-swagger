import express from 'express';
import log from './log/logger';
// import * as swaggerUI from 'swagger-ui-express';
// import * as swaggerJSDoc from 'swagger-jsdoc';
import * as basicAuth from 'express-basic-auth';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8082, () => {
  log.info('Server successfully started on port 8082');
});
