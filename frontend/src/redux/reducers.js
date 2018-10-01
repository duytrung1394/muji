// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import Auth from "./auth/reducer";
import Fruit from "./fruit/reducers";
import App from "./app/reducer";
import ThemeSwitcher from "./themeSwitcher/reducer";
import PasswordRenewals from "./passwordRenewals/reducer";
import PasswordResets from "./passwordResets/reducer";
export default {
  Auth,
  App,
  ThemeSwitcher,
  PasswordRenewals,
  PasswordResets,
  Fruit
};
