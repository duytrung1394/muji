import asyncComponent from '../helpers/AsyncFunc';

const routes = [
  {
    path: "tasks/",
    component: asyncComponent(() => import("./containers/Task/index"))
  },
  {
    path: "tasks/page/:page(\\d+)",
    component: asyncComponent(() => import("./containers/Task/index"))
  },
  {
    path: "tasks/new",
    component: asyncComponent(() => import("./containers/Task/new"))
  },
  {
    path: "tasks/:id(\\d+)",
    component: asyncComponent(() => import("./containers/Task/show"))
  },
  {
    path: "tasks/:id(\\d+)/edit",
    component: asyncComponent(() => import("./containers/Task/edit"))
  }
];
export default routes;
