import { createActions } from "redux-actions";
import req from "../shared/requestActions";

const actions = createActions({
  CMS: {
    CMDTY: {
      SECTION: {
        INCLUDE: {
          FETCH: req,
        },
        // SUBSECTIONS: {
        //   FETCH: req,
        // },
      },
      DETAIL: {
        INCLUDE1: {
          FETCH: req,
        },
        INCLUDE2: {
          FETCH: req,
        }
      }
    },
  }
});

export default actions.cms;
