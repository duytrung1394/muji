import actions from "./actions";
import { RESTEntityApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";

const api = RESTEntityApi("orders");

export default function* saga() {
  yield restAllSaga("order", api, actions);
}
