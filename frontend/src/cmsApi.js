import axios from "axios";
import settings from "./settings";

// パスは仮．詳細な仕様が判明次第対応する
const base = `${settings.apiUrl}/api/v1/cms`;

function getApi(path, option = {}) {
  return axios.get(`${base}/${path.replace(/^\//, "")}`, {
    ...option,
    headers: {
      Accept: "text/html",
      "content-type": "application/json",
    }
  });
}

const Api = {
  get: getApi
};

export default Api;
