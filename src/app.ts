import express from 'express';
import log from './log/logger';
import { router } from './routes/app.routes';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import * as basicAuth from 'express-basic-auth';

const options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'Swagger with NodeJS express tutorial',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:8082',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.ts'],
};

const swaggerSpecs = swaggerJSDoc(options);

const app = express();
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8082, () => {
  log.info('Server successfully started on port 8082');
});
