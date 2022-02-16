import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { options } from '../config/swagger.conf';

const swagger = express.Router();

const swaggerUiOptions = {
  swaggerOptions: {
    requestInterceptor: (request: { headers: { [x: string]: string | undefined } }) => {
      const value = '; ' + document.cookie;
      const parts = value.split('; XSRF-TOKEN=');
      if (parts.length === 2) {
        request.headers['X-XSRF-TOKEN'] = parts[1].split(';').shift();
      }
      return request;
    },
  },
};

swagger.use(swaggerUI.serve, swaggerUI.setup(options, swaggerUiOptions));

export { swagger };
