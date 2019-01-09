import actions from "./actions";
import { RESTEntityApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";

const api = RESTEntityApi("customer-addresses");

export default function* saga() {
  yield restAllSaga("customer_address", api, actions);
}
