import axios from 'axios';
import { store } from './redux/store';
import settings from './settings';

const base = settings.apiUrl;

function getHeaders(){
  const idToken = store.getState().Auth.get("idToken");
  return {
    'Accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': `Bearer ${idToken}`
  };
}

function getApi(path, option={}){
  return axios.get(`${base}/${path}`, {
    ...option,
    headers: getHeaders()
  });
}

function postApi(path, body, option={}){
  return axios.post(`${base}/${path}`, body, {
    ...option,
    headers: getHeaders()
  });
}

function putApi(path, body, option={}){
  return axios.put(`${base}/${path}`, body, {
    ...option,
    headers: getHeaders()
  });
}

function deleteApi(path, option={}){
  return axios.delete(`${base}/${path}`, {
    ...option,
    headers: getHeaders()
  });
}

const Api = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
};

export default Api;