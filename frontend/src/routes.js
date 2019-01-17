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
    path: "/store/review/detail/:review_code",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerReview/show")
    )
  },
  {
    path: "/store/review/user/",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerReview/indexByUser")
    )
  },
  {
    path: "/store/review/following/",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerReview/indexByFollowing")
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
  },
  {
    path: "/store/cust/address/create",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerAddress/new")
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
    path: "/store/cust/address/create/confirm",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/CustomerAddress/confirmNew")
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
    path: "/store/cart/donation/payment/:donation_code/:number_of_units",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/DonationTop/payment")
    )
  },
  {
    path: "/store/cart/donation/confirm/:donation_code/:number_of_units",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/DonationTop/confirm")
    )
  },
  {
    path: "/store/cart/donation/complete",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/DonationTop/complete")
    )
  },
  {
    path: "/store/cust/orders",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Order/index")
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
    path: "/store/cust/order/reservationHistory",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Order/indexReservationHistory")
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
    path: "/orders/:order_code",
    exact: true,
    component: asyncComponent(() =>
      require("./customApp/containers/Order/show")
    )
  }
];
export default routes;
