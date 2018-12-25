// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import asyncComponent from "./helpers/AsyncFunc";
const routes = [
  {
    path: "/",
    exact: true,
    component: asyncComponent(() => require("./customApp/containers/Top/index"))
  },
  {
    path: "/store",
    exact: true,
    component: asyncComponent(() => require("./customApp/containers/Top/index"))
  },
  {
    path: "/about",
    exact: true,
    component: asyncComponent(() => require("./about.js"))
  },
  {
    path: "/signin",
    exact: true,
    component: asyncComponent(() => require("./containers/Page/signin"))
  },
  {
    path: "/fruits",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Fruit/index")
    )
  },
  {
    path: "/fruits/!new",
    exact: true,
    component: asyncComponent(() => require("./customApp/containers/Fruit/new"))
  },
  {
    path: "/fruits/:fruit_code",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Fruit/show")
    )
  },
  {
    path: "/httpbin",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Httpbin/index")
    )
  },
  {
    path: "/store/cmdty/section/:category_code",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/ProductCategoryTop/index")
    )
  },
  {
    path: "/store/review/history",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerReview/index")
    )
  },
  {
    path: "/store/review/item/:item_code/post",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerReview/new")
    )
  },
  {
    path: "/store/review/report/:item_code/:comment_code",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerReview/commentReport")
    )
  },
  {
    path: "/store/cmdty/donation",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/DonationTop/index")
    )
  },
  {
    path: "/store/cust/address/list",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerAddress/index")
    )
  },
  {
    path: "/store/cmdty/donation/:donation_code",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/DonationTop/show")
    )
  },
  {
    path: "/store/cust/address/list/page/:page(\\d+)",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerAddress/index")
    )
  }
];
export default routes;
