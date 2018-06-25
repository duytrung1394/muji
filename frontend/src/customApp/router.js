// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import restRoutes from "./restRoutes";
const routes = [
  ...restRoutes("tasks", "Task"),
  ...restRoutes("users", "User"),
  ...restRoutes("categories", "Category"),
  ...restRoutes("items", "Item"),
  ...restRoutes("skus", "Sku"),
  ...restRoutes("brands", "Brand"),
  ...restRoutes("addonServices", "AddonService"),
  ...restRoutes("addon-services", "AddonService"),
  ...restRoutes("addon-services", "AddonService"),
  ...restRoutes("discounts", "Discount"),
  ...restRoutes("stores", "Store")
];
export default routes;
