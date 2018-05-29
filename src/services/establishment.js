import request from 'superagent';
import config from '../config.js';

const establishmentService = store => next => action => {
  next(action)
  switch (action.type) {
  case 'GET_TODO_DATA':
    request
      .get(config.server.development + '/establishment')
      .end((err, res) => {
        if (err) {
          return next({
            type: 'GET_ESTABLISHMENT_DATA_ERROR',
            err
          })
        }
        const data = JSON.parse(res.text)
        next({
          type: 'GET_ESTABLISHMENT_DATA_RECEIVED',
          data
        })
      });
    break
  default:
    break
  }

};

export default establishmentService