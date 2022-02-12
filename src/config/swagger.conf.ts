export const options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'Swagger with NodeJS express tutorial',
      version: '1.0.0',
    },
    host: 'localhost:8082',
    basePath: '/api',
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
