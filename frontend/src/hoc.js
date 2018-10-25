import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";
import themes from "./settings/themes";
import AppLocale from "./languageProvider";
import config, {
  getCurrentLanguage
} from "./containers/LanguageSwitcher/config";
import { themeConfig } from "./settings";
import DashAppHolder from "./dashAppStyle";

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
      {props.children}
    </IntlProvider>
  </Provider>
);

export default Hoc;
export { AppLocale, SimpleHoc };
