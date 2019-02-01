import actions from "./actions";
import api from "../../../../api.js";
import restAllSaga from "../../shared/list/saga_generator";

// TODO: 一般化
const endpoint = "lotteries/:section_code";

const getEndpoint = ({ section_code }) => {
  return endpoint.replace(":section_code", section_code);
};

const GET = ({ replaces, params }) => {
  return api.get(getEndpoint(replaces), {
    params
  });
};
const DELETE = ({ replaces, keys }) => {
  return api.delete(getEndpoint(replaces), {
    params: {
      codes: keys
    }
  });
};

export default function* saga() {
  yield restAllSaga(
    {
      GET,
      DELETE
    },
    actions
  );
}
