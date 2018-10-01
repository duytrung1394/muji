import asyncComponent from "./helpers/AsyncFunc";

const routes = [
  {
    path: '/',
    exact: true,
    component: asyncComponent(() => require("./home.js") )
  },
  {
    path: '/tasks',
    exact: true,
    component: asyncComponent(() => require("./customApp/containers/Task/index.js") )
  },
  {
    path: '/tasks/page/:page(\\d+)',
    exact: true,
    component: asyncComponent(() => require("./customApp/containers/Task/index.js") )
  },
  {
    path: '/tasks/:id([^!\/]+)',
    exact: true,
    component: asyncComponent(() => require("./customApp/containers/Task/show.js") )
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