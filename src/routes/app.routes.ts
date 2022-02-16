import express from 'express';
import log from '../log/logger';
import requiresUser from '../middleware/user';

const router = express.Router();

router.get('/greet', (req, res) => {
  log.debug('in root url');
  res.send('Hello World!');
});

router.get('/getData', requiresUser, (req, res) => {
  log.debug('in /getData, req.query :: ' + JSON.stringify(req.query));
  const { pageNum, pageLength } = req.query;
  const resp = {
    pageNum: pageNum,
    pageLength: pageLength,
  };
  res.status(200);
  res.send(resp);
});

router.post('/getData', requiresUser, (req, res) => {
  log.debug('in /getData, req.query :: ' + JSON.stringify(req.query));
  const { pageNum, pageLength } = req.query;
  const resp = {
    pageNum: pageNum,
    pageLength: pageLength,
  };
  res.status(200);
  res.send(resp);
});

export { router };
