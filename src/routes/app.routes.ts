import express from 'express';
import log from '../log/logger';

const router = express.Router();
router.get('/getData', (req, res) => {
  log.debug('in /getData, req.query :: ' + JSON.stringify(req.query));
  const { pageNum, pageLength } = req.query;
  res.send(req.query);
});

router.post('/login', (req, res) => {
  const { id, password } = req.body;
  log.debug('user login request :: ' + id);
  const resp = {
    token: `thisIsTheBearerTokenFor${id}`,
  };
  res.send(resp);
});

export { router };
