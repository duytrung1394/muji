import actions from "./actions";
import { RESTEntityApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";

const api = RESTEntityApi("deliveries");

export default function* saga() {
  yield restAllSaga("delivery", api, actions);
}
