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
  }
];
export default routes;
