export default function restRoutes(path, componentName){
  // componentName
  return [
    {
      path: `${path}/`,
      component: asyncComponent(() => import(`./containers/${componentName}/index`))
    },
    {
      path: `${path}/page/:page(\\d+)`,
      component: asyncComponent(() => import(`./containers/${componentName}/index`))
    },
    {
      path: `${path}/new`,
      component: asyncComponent(() => import(`./containers/${componentName}/new`))
    },
    {
      path: `${path}/:id(\\d+)`,
      component: asyncComponent(() => import(`./containers/${componentName}/show`))
    },
    {
      path: `${path}/:id(\\d+)/edit`,
      component: asyncComponent(() => import(`./containers/${componentName}/edit`))
    }
  ];
}