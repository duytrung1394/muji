// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import Task from "./task/reducers";
import Store from "./store/reducers";
import Discount from "./discount/reducers";
import AddonService from "./addon_service/reducers";
import Brand from "./brand/reducers";
import Sku from "./sku/reducers";
import Item from "./item/reducers";
import Category from "./category/reducers";
import User from "./user/reducers";
export default {
  Task,
  User,
  Category,
  Item,
  Sku,
  Brand,
  AddonService,
  Discount,
  Store
};
