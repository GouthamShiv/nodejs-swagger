export const options = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Swagger with NodeJS Tutorial',
    description: 'Integrating swagger in NodeJS, express application in TypeScript',
    license: {
      name: 'MIT',
      url: 'https://github.com/GouthamShiv/nodejs-swagger/blob/ace06fd54177578dc136f2795a56e9e02d4f00f0/LICENSE',
    },
  },
  servers: [
    {
      url: 'https://boiling-falls-56189.herokuapp.com/api',
    },
  ],
  tags: [
    {
      name: 'Auth',
      description: 'API(s) for user authentication',
    },
    {
      name: 'Main Data',
      description: 'API(s) related to main data',
    },
    {
      name: 'Greeting',
      description: "API to greet with the message 'Hello World!'",
    },
  ],
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/greet': {
      get: {
        tags: ['Greeting'],
        summary: "API that returns 'Hello World!' message",
        responses: {
          '200': {
            description: 'Ok',
            schema: {},
          },
          '401': {
            $ref: '#/responses/error/UnauthorizedError',
          },
        },
      },
    },
    '/login': {
      post: {
        tags: ['Auth'],
        summary: 'For user login',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/login',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Ok',
            schema: {},
          },
          '401': {
            $ref: '#/responses/error/UnauthorizedError',
          },
        },
      },
    },
    '/getData': {
      get: {
        security: [
          {
            bearerAuth: [],
          },
        ],
        tags: ['Main Data'],
        summary: 'Get main data',
        parameters: [
          {
            name: 'pageNum',
            in: 'query',
            schema: {
              type: 'integer',
              default: 1,
            },
          },
          {
            name: 'pageLength',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              default: 10,
            },
          },
        ],
        responses: {
          '200': {
            description: 'Ok',
            schema: {},
          },
          '401': {
            $ref: '#/responses/error/UnauthorizedError',
          },
        },
      },
    },
  },
  responses: {
    error: {
      UnauthorizedError: {
        description: 'Access token is missing or invalid',
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      login: {
        type: 'object',
        required: ['id', 'password'],
        properties: {
          id: {
            type: 'string',
            default: 'testUser',
          },
          password: {
            type: 'password',
            default: 'testUser123',
          },
        },
      },
    },
  },
};
