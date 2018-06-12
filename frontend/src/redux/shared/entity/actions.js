import req from '../requestActions';

const restEntityActions = {
  FETCH: req,
  CREATE: req,
  UPDATE: {
    ...req,
    REQUEST: (id, entity) => ({id, entity}),
  },
  DESTROY: req,
};

export default restEntityActions;