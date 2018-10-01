import qs from "qs";
import options from "../containers/Sidebar/options";

export function getInitData() {
  if(typeof(window) === "undefined"){
    // SSR
    return {};
    // TODO: SSR対応ちゃんとやる
  }
  const initData = qs.parse(window.location.search.slice(1));
  if (initData.toggle)
    initData.toggle.free_shipping =
      initData.toggle.free_shipping === "true" ? true : undefined;
  return initData;
}
export function setUrl(searchState) {
  if(typeof(window) === "undefined"){
    // SSR
    return;
    // TODO: SSR対応ちゃんとやる
  }
  const search = searchState
    ? `${window.location.pathname}?${qs.stringify(searchState)}`
    : "";
  window.history.pushState(searchState, null, search);
}

export function getDefaultPath() {
  const getParent = lastRoute => {
    const parent = [];
    if (!lastRoute) return parent;
    options.forEach(option => {
      if (option.children) {
        option.children.forEach(child => {
          if (child.key === lastRoute) {
            parent.push(lastRoute);
            parent.push(option.key);
          }
        });
      }
    });
    return parent;
  };
  if (typeof(window) !== "undefined" && window.location.pathname) {
    const routes = window.location.pathname.split("/");
    if (routes.length > 1) {
      const lastRoute = routes[routes.length - 1];
      return getParent(lastRoute);
    }
  }
  return [];
}
