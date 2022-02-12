import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
  //   prettyPrint: true,
  level: 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
