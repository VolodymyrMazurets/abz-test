import * as Logger from 'logplease';
import has from 'has';

const ENV_MODE = process.env.NODE_ENV === 'development';

const onLogger = (name = '', msg, type) => {
  if (!ENV_MODE) return;
  const newLogger = Logger.create(name);
  newLogger[type](msg);
};

export default {
  debug: (name = '', msg) => {
    onLogger(name, msg, 'debug');
  },
  info: (name = '', msg) => {
    onLogger(name, msg, 'info');
  },
  error: (name = '', msg) => {
    onLogger(name, msg, 'error');
  },
  apiError: (name = '', error = 'Fuck') => {
    let msg = error;
    if (error instanceof Object) {
      if (has(error, 'data')) {
        msg = error.data;
      }
      if (has(error, 'response')) {
        msg = error.response.data;
      }
    }
    onLogger(name, msg, 'error');
  },
  warn: (name = '', msg) => {
    onLogger(name, msg, 'warn');
  },
  log: (name = '', msg) => {
    onLogger(name, msg, 'log');
  },
}
