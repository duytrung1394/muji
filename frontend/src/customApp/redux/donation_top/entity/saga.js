import actions from "./actions";
import { RESTEntityApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";

const api = RESTEntityApi("donation-tops");

export default function* saga() {
  yield restAllSaga("donation_top", api, actions);
}
