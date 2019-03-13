import { createActions } from "redux-actions";
import req from "../shared/requestActions";

const actions = createActions({
  CMS: {
    CMDTY: {
      SECTION: {
        FETCH_INCLUDE: req,
        // FETCH_SUBSECTIONS: req
      }
    },
    // DETAIL: {},
    // ... ,
  }
});

export default actions.cms;
