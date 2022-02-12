import express from 'express';
import log from '../log/logger';

const router = express.Router();
router.get('/getData', (req, res) => {
  log.debug('in /getData, req.query :: ' + JSON.stringify(req.query));
  const { pageNum, pageLength } = req.query;
  res.send(req.query);
});

export { router };
