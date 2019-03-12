import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";
import themes from "./settings/themes";
import AppLocale from "./languageProvider";
import { themeConfig } from "./settings";
import DashAppHolder from "./dashAppStyle";
import { isServer } from "./helpers/ssr";
import { language } from "./settings";

let config, getCurrentLanguage;
if (isServer()) {
  // SSR向けにはデフォルトの言語を返すようにだけしておく
  const option = {
    languageId: "japanese",
    locale: "ja",
    text: "Japanese"
    // iconのsvgをimportするの無理なので作り直す必要ありそう
  };
  config = {
    defaultLanguage: language,
    options: [option]
  };
  getCurrentLanguage = () => option;
} else {
  const lsConfig = require("./containers/LanguageSwitcher/config");
  config = lsConfig.default;
  getCurrentLanguage = lsConfig.getCurrentLanguage;
}

const currentAppLocale =
  AppLocale[getCurrentLanguage(config.defaultLanguage || "english").locale];

const Hoc = props => (
  <LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <DashAppHolder>
          <Provider store={store}>{props.children}</Provider>
        </DashAppHolder>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>
);

const SimpleHoc = props => (
  <Provider store={store}>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <DashAppHolder>{props.children}</DashAppHolder>
    </IntlProvider>
  </Provider>
);

export default Hoc;
export { AppLocale, SimpleHoc };
