import express from 'express';
import { swagger } from './swagger';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { login } from '../routes/login.routes';

const app = express().disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use('/api-docs', swagger);
app.use(login);

export { app };
