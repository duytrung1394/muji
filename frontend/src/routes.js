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
]

export default routes;