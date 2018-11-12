// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import Task from "./task/reducers";
import ProductDetail from "./product_detail/reducers";
import ProductCategoryTop from "./product_category_top/reducers";
import Top from "./top/reducers";
import Httpbin from "./httpbin/reducers";
import Fruit from "./fruit/reducers";
export default {
  Task,
  Fruit,
  Httpbin,
  Top,
  ProductCategoryTop,
  ProductDetail
};
