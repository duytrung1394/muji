// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import Task from "./task/reducers";
import Search from "./search/reducers";
import Favorite from "./favorite/reducers";
import Donation from "./donation/reducers";
import Lottery from "./lottery/reducers";
import Order from "./order/reducers";
import CustomerReview from "./customer_review/reducers";
import CustomerAddress from "./customer_address/reducers";
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
  CustomerAddress,
  CustomerReview,
  Donation,
  Order,
  Favorite,
  Search,
  Lottery
};
