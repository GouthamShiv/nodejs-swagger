import requiresUser from '../middleware/user';
import express from 'express';
import log from '../log/logger';

const router = express.Router();

router.get('/', requiresUser, (req, res) => {
  log.debug('in root url');
  res.send('Hello World!');
});

router.get('/getData', requiresUser, (req, res) => {
  log.debug('in /getData, req.query :: ' + JSON.stringify(req.query));
  const { pageNum, pageLength } = req.query;
  res.send(req.query);
});

router.post('/login', (req, res) => {
  const { id, password } = req.body;
  if (id === 'testUser' && password === 'testUser123') {
    log.debug('user login request :: ' + id);
    const resp = {
      token: `thisIsAnExampleBearerTokenForAuth`,
    };
    res.send(resp);
  } else {
    res.status(400);
    res.send('User with provided details is not registered');
  }
});

export { router };
