// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import restRoutes from './restRoutes';

const routes = [
  ...restRoutes('tasks', 'Task')
];
export default routes;
