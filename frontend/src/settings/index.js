import { isServer } from "../helpers/ssr";

const apiUrlDefault = "http://backend:8080;"

const apiUrls = {
  release: {
    browser: "https://muji-ec-release.xenophy.info",
  },
  preview: {
    browser: "https://muji-ec.xenophy.info",
  },
  // ローカルでサーバーに近い動かし方をするとき向け
  local: {
    browser: "http://localhost:8000",
  },
  // yarn dev で動かす場合向け
  development: {
    ssr: "http://localhost:8081",
    browser: "http://localhost:8081",
  }
};

const currentEnv = isServer() ? "ssr" : "browser";

const env = process.env.REACT_APP_ENV || process.env.NODE_ENV;

const settings = {
  apiUrl: apiUrls[env][currentEnv] || apiUrlDefault,
  dc: () => "_dc=" + Math.floor(new Date().getTime() / 1000)
};

export default settings;

const siteConfig = {
  siteName: "ISOMORPHIC",
  siteIcon: "ion-flash",
  footerText: "Isomorphic ©2017 Created by RedQ, Inc"
};

const themeConfig = {
  topbar: "themedefault",
  sidebar: "themedefault",
  layout: "themedefault",
  theme: "themedefault"
};
const language = "japanese";
const AlgoliaSearchConfig = {
  appId: "",
  apiKey: ""
};
const Auth0Config = {
  domain: "",
  clientID: "",
  allowedConnections: ["Username-Password-Authentication"],
  rememberLastLogin: true,
  language: "en",
  closable: true,
  options: {
    auth: {
      autoParseHash: true,
      redirect: true,
      redirectUrl: "http://localhost:4000/auth0loginCallback"
    },
    languageDictionary: {
      title: "Isomorphic",
      emailInputPlaceholder: "demo@gmail.com",
      passwordInputPlaceholder: "demodemo"
    },
    theme: {
      labeledSubmitButton: true,
      logo: "",
      primaryColor: "#E14615",
      authButtons: {
        connectionName: {
          displayName: "Log In",
          primaryColor: "#b7b7b7",
          foregroundColor: "#000000"
        }
      }
    }
  }
};
const firebaseConfig = {
  apiKey: ``,
  authDomain: "",
  databaseURL: "",
  projectId: `abc`,
  storageBucket: "",
  messagingSenderId: ""
};
const googleConfig = {
  apiKey: "" //
};
const mapboxConfig = {
  tileLayer: "",
  maxZoom: "",
  defaultZoom: "",
  center: []
};
const youtubeSearchApi = "";
export {
  siteConfig,
  themeConfig,
  language,
  AlgoliaSearchConfig,
  Auth0Config,
  firebaseConfig,
  googleConfig,
  mapboxConfig,
  youtubeSearchApi
};
