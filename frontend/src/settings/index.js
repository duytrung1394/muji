import { isServer } from "../helpers/ssr";

const apiUrl = {
  release: {
    ssr: "http://backend:8080",
    browser: "https://muji-ec-release.xenophy.info",
  },
  preview: {
    ssr: "http://backend:8080",
    browser: "https://muji-ec.xenophy.info",
  },
  development: {
    ssr: "http://localhost:8081",
    browser: "http://localhost:8081",
  }
};

const env = isServer() ? "ssr" : "browser";

const react_app_env = process.env.REACT_APP_ENV;

const settings = {
  apiUrl: apiUrl[react_app_env][env],
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
