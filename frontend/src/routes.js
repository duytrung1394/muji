import asyncComponent from "./helpers/AsyncFunc";

const routes = [
  {
    path: '/',
    exact: true,
    component: asyncComponent(() => require("./home.js") )
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent(() => require("./about.js") )
  },
  {
    path: '/signin',
    exact: true,
    component: asyncComponent(() => require("./containers/Page/signin") )
  },
]

export default routes;