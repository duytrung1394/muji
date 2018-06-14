import asyncComponent from '../helpers/AsyncFunc';
import restRoutes from './restRoutes';

const routes = [
  ...restRoutes('tasks', 'Task')
];
export default routes;
