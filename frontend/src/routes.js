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
  {
    path: '/fruits',
    exact: true,
    component: asyncComponent(() => require("./containers/Fruit/index") )
  },
  {
    path: '/fruits/:id',
    exact: true,
    component: asyncComponent(() => require("./containers/Fruit/show") )
  },
]

export default routes;