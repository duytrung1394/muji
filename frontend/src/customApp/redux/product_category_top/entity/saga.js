import actions from "./actions";
import { RESTEntityApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";

const api = RESTEntityApi("product-category-tops");

export default function* saga() {
  yield restAllSaga("product_category_top", api, actions);
}
