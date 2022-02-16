import csurf from 'csurf';
import log from './log/logger';
import { app } from './utils/server';
import { router } from './routes/app.routes';
import requiresUser from './middleware/user';
import { NextFunction, Request, Response } from 'express';

const csrfProtection = csurf({
  cookie: true,
  ignoreMethods: ['GET', 'HEAD', 'OPTIONS'],
});

app.use(csrfProtection, (req, res, next): void => {
  res.cookie('XSRF-TOKEN', req.csrfToken(), { secure: true, httpOnly: true, maxAge: 60 * 30 * 1000 });
  next();
});

app.get('/logged-in', requiresUser, (req, res) => {
  res.status(200);
  res.send({
    name: 'testUser',
  });
});

app.use(function (err: { code: string }, req: Request, res: Response, next: NextFunction) {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);

  // handle CSRF token errors here
  res.sendStatus(403);
});

app.use('/api', router);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  log.info('Server successfully started on port ' + PORT);
});
