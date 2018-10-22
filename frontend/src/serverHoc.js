import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { IntlProvider } from "react-intl";
import AppLocale from "./languageProvider";
import config, {
  getCurrentLanguage
} from "./containers/LanguageSwitcher/config";

const currentAppLocale =
  AppLocale[getCurrentLanguage(config.defaultLanguage || "english").locale];

// SSR向けのサーバーサイドでrender可能なHoc, 将来的には hoc.js と共通化したい
// TODO: essentialHoc みたいなのを分離して、Providerなど本質的に重要なものだけはそこに入れるのが正しい気がする
const SimpleHoc = props => (
  <Provider store={store}>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      {props.children}
    </IntlProvider>
  </Provider>
);

export default SimpleHoc;
