import { createActions } from "redux-actions";
import req from "../shared/requestActions";

const actions = createActions({
  HTTPBIN: {
    IP: {
      FETCH: req
    }
  }
});

export default actions.httpbin;
