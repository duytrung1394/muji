import { createActions } from "redux-actions";
import req from "../shared/requestActions";

const actions = createActions({
  CMS: {
    CMDTY: {
      SECTION: {
        FETCH_INCLUDE: req,
        // FETCH_SUBSECTIONS: req
      },
      DETAIL: {
        FETCH_INCLUDE1: req
      }
    },
  }
});

export default actions.cms;
