import req from "../requestActions";

const restEntityActions = {
  FETCH: req,
  INIT: req,
  CREATE: req,
  UPDATE: {
    ...req,
    REQUEST: (primaryKey, entity) => ({ primaryKey, entity })
  },
  DESTROY: req
};

export default restEntityActions;
