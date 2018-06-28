import {Map} from 'immutable';

export const restInitState = new Map({
  entities: [],
  total: 0,
  fetching: false,
  fetched: false,
  fetchError: false,
  destroying: false,
  destroyed: false,
  destroyError: false,
  filters: [],
});

// GET
export const fetchRequest = (state, action) => state
  .set('fetching', true)
  .set('fetched', false)
  .set('fetchError', false);

export const fetchSuccess = (state, action) => state
  .set('entities', action.payload.data)
  .set('total', action.payload.total)
  .set('fetching', false)
  .set('fetched', true);

export const fetchFailure = (state, action) => state
  .set('entities', [])
  .set('fetching', false)
  .set('fetchError', true);

export const fetchCleanup = (state, action) => state
  .set('entities', [])
  .set('total', 0)
  .set('fetching', false)
  .set('fetched', false)
  .set('fetchError', false);

// DELETE
export const destroyRequest = (state, action) => state
  .set('destroying', true)
  .set('destroyed', false)
  .set('destroyError', false);

export const destroySuccess = (state, action) => state
  .set('destroying', false)
  .set('destroyed', true);

export const destroyFailure = (state, action) => state
  .set('destroying', false)
  .set('destroyError', true);

export const destroyCleanup = (state, action) => state
  .set('destroying', false)
  .set('destroyed', false)
  .set('destroyError', false);

export const setFilters = (state, action) => state
  .set('filters', action.payload);

const restReducer = {
  FETCH: {
    REQUEST: fetchRequest,
    SUCCESS: fetchSuccess,
    FAILURE: fetchFailure,
    CLEANUP: fetchCleanup,
  },
  DESTROY: {
    REQUEST: destroyRequest,
    SUCCESS: destroySuccess,
    FAILURE: destroyFailure,
    CLEANUP: destroyCleanup,
  },
  SET_FILTERS: setFilters,
};

export default restReducer;