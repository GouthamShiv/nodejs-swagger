import express from 'express';
import log from '../log/logger';

const login = express.Router();

login.post('/login', (req, res) => {
  const { id, password } = req.body;
  if (id === 'testUser' && password === 'testUser123') {
    log.debug('user login request :: ' + id);
    const resp = {
      token: `thisIsAnExampleBearerTokenForAuth`,
    };
    res.status(200);
    res.send(resp);
  } else {
    res.status(400);
    res.send('User with provided details is not registered');
  }
});

export { login };
