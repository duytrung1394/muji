import { Map } from "immutable";

export const restInitState = new Map({
  // resources/:id 向け
  entity: {},
  fetching: false,
  fetched: false,
  fetchError: false,
  // resources/new 向け
  initializing: false,
  initialized: false,
  initializeError: false,
  // resources/new 向け
  creating: false,
  created: false,
  createError: false,
  createErrors: {},
  // resources/:id/edit 向け
  updating: false,
  updated: false,
  updateError: false,
  updateErrors: {},
  // resources/:idの削除動作向け
  destroying: false,
  destroyError: false,
  destroyed: false
});

// GET
export const fetchRequest = (state, action) =>
  state
    .set("fetching", true)
    .set("fetched", false)
    .set("fetchError", false);

export const fetchSuccess = (state, action) =>
  state
    .set("entity", action.payload.data)
    .set("fetching", false)
    .set("fetched", true);

export const fetchFailure = (state, action) =>
  state
    .set("entity", {})
    .set("fetching", false)
    .set("fetchError", true);

export const fetchCleanup = (state, action) =>
  state
    .set("entity", {})
    .set("fetching", false)
    .set("fetched", false)
    .set("fetchError", false);

// GET
export const initRequest = (state, action) =>
  state
    .set("initializing", true)
    .set("initialized", false)
    .set("initializeError", false);

export const initSuccess = (state, action) =>
  state
    .set("entity", action.payload.data)
    .set("initializing", false)
    .set("initialized", true);

export const initFailure = (state, action) =>
  state
    .set("entity", {})
    .set("initializing", false)
    .set("initializeError", true);

export const initCleanup = (state, action) =>
  state
    .set("entity", {})
    .set("initializing", false)
    .set("initialized", false)
    .set("initializeError", false);

// POST
export const createRequest = (state, action) =>
  state
    .set("creating", true)
    .set("created", false)
    .set("createError", false)
    .set("createErrors", {});

export const createSuccess = (state, action) =>
  state
    .set("creating", false)
    .set("entity", action.payload.data)
    .set("created", true);

export const createFailure = (state, action) =>
  state
    .set("creating", false)
    .set("createError", true)
    .set("createErrors", action.payload.response.data.errors);

export const createCleanup = (state, action) =>
  state
    .set("creating", false)
    .set("created", false)
    .set("entity", {})
    .set("createError", false)
    .set("createErrors", {});

// PUT
export const updateRequest = (state, action) =>
  state
    .set("updating", true)
    .set("updated", false)
    .set("updateError", false)
    .set("updateErrors", {});

export const updateSuccess = (state, action) =>
  state.set("updating", false).set("updated", true);

export const updateFailure = (state, action) =>
  state
    .set("updating", false)
    .set("updateError", true)
    .set("updateErrors", action.payload.response.data.errors);

export const updateCleanup = (state, action) =>
  state
    .set("updating", false)
    .set("updated", false)
    .set("entity", {})
    .set("updateError", false)
    .set("updateErrors", {});

// DELETE
export const destroyRequest = (state, action) =>
  state
    .set("destroying", true)
    .set("destroyed", false)
    .set("destroyError", false);

export const destroySuccess = (state, action) =>
  state.set("destroying", false).set("destroyed", true);

export const destroyFailure = (state, action) =>
  state.set("destroying", false).set("destroyError", true);

export const destroyCleanup = (state, action) =>
  state
    .set("destroying", false)
    .set("destroyed", false)
    .set("destroyError", false);

const restReducer = {
  FETCH: {
    REQUEST: fetchRequest,
    SUCCESS: fetchSuccess,
    FAILURE: fetchFailure,
    CLEANUP: fetchCleanup
  },
  INIT: {
    REQUEST: initRequest,
    SUCCESS: initSuccess,
    FAILURE: initFailure,
    CLEANUP: initCleanup
  },
  CREATE: {
    REQUEST: createRequest,
    SUCCESS: createSuccess,
    FAILURE: createFailure,
    CLEANUP: createCleanup
  },
  UPDATE: {
    REQUEST: updateRequest,
    SUCCESS: updateSuccess,
    FAILURE: updateFailure,
    CLEANUP: updateCleanup
  },
  DESTROY: {
    REQUEST: destroyRequest,
    SUCCESS: destroySuccess,
    FAILURE: destroyFailure,
    CLEANUP: destroyCleanup
  }
};

export default restReducer;
