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
      require("./customApp/containers/Review/history")
    )
  },
  {
    path: "/store/cmdty/donation",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Donation/index")
    )
  },
  {
    path: "/store/cmdty/donation/:donation_code",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Donation/show")
    )
  },
  {
    path: "/store/cart/donation/payment/:donation_code/:number_of_units",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Donation/payment")
    )
  },
  {
    path: "/store/cart/donation/confirm/:donation_code/:number_of_units",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Donation/confirm")
    )
  },
  {
    path: "/store/cart/donation/complete",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Donation/complete")
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
    path: "/store/cust/address/list/page/:page(\\d+)",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerAddress/index")
    )
  },
  {
    path: "/store/cust/address/create",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerAddress/new")
    )
  },
  {
    path: "/store/cust/address/create/confirm",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerAddress/confirmNew")
    )
  },
  {
    path: "/store/cust/address/edit/:addressBookNo(\\d+)",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerAddress/edit")
    )
  },
  {
    path: "/store/cust/address/edit/:addressBookNo(\\d+)/confirm",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerAddress/confirmEdit")
    )
  },
  {
    path: "/store/cust/address/complete",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerAddress/complete")
    )
  },
  {
    path: "/store/lucky/:section_code",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Lottery/index")
    )
  },
  {
    path: "/store/lucky/:section_code/:jan_code",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Lottery/show")
    )
  },
  {
    path: "/store/cust/order/itemlist",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Order/indexPurchaseHistory")
    )
  },
  {
    path: "/store/cust/favorite",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Favorite/index")
    )
  },
  {
    path: "/store/cust/order/storeReserve",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Order/indexStoreReserve")
    )
  },
  {
    path: "/store/cust/order/subscription",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Order/indexSubscription")
    )
  },
  {
    path: "/store/search/store",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Search/index")
    )
  },
  {
    path: "/store/search/cmdty",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Search/indexItem")
    )
  }
];
export default routes;
