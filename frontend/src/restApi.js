import settings from './settings';

const axios = require('axios');

const headers = {
  'Accept': 'application/json',
  'content-type': 'application/json',
};
const option = { headers };

const base = settings.apiUrl;

export function RESTEntityApi(endpoint, keyName='codes'){
  const GET = (primary_key) =>
    axios.get(`${base}/${endpoint}/${primary_key}`, option);
  const POST = (body) =>
    axios.post(`${base}/${endpoint}/`, body, option);
  const PUT = (primary_key, body) =>
    axios.put(`${base}/${endpoint}/${primary_key}`, body, option);
  const DELETE = (primary_key) => {
    return axios.delete(`${base}/${endpoint}`, {
      ...option,
      params: {
        [keyName]: [primary_key]
      }
    });
  }

  return {
    GET,
    POST,
    PUT,
    DELETE,
  };
}

export function RESTListApi(endpoint, keyName='codes'){
  const GET = (page) => {
    let url = `${base}/${endpoint}`;
    if( page && page > 0 ){
      url = `${url}?page=${page}`
    }
    return axios.get(url, option);
  };
  const DELETE = (keys) => {
    return axios.delete(`${base}/${endpoint}`, {
      ...option,
      params: {
        [keyName]: keys
      }
    });
  };

  return {
    GET,
    DELETE,
  };
}


