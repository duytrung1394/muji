import actions from "./actions";
import { RESTEntityApi, RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";

const api = RESTEntityApi("mile-services");

export default function* saga() {
  yield restAllSaga("mile-services", api, actions);
}
