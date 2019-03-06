import actions from "./actions";
import { RESTEntityApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";

const api = RESTEntityApi("product-details");

export default function* saga() {
  yield restAllSaga("product_detail", api, actions);
}
