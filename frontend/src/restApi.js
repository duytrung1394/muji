const axios = require('axios');

const headers = {
  'Accept': 'application/json',
  'content-type': 'application/json',
};
const option = { headers };

const base = "http://localhost:8080";

export function RESTEntityApi(endpoint){
  const GET = (primary_key) =>
    axios.get(`${base}/${endpoint}/${primary_key}`, option);
  const POST = (body) =>
    axios.post(`${base}/${endpoint}/`, body, option);
  const PUT = (primary_key, body) =>
    axios.put(`${base}/${endpoint}/${primary_key}`, body, option);
  const DELETE = (primary_key) =>
    axios.delete(`${base}/${endpoint}/${primary_key}`, option);

  return {
    GET,
    POST,
    PUT,
    DELETE,
  };
}

export function RESTListApi(endpoint, keyName='code'){
  const GET = (page) => {
    let url = `${base}/${endpoint}`;
    if( page && page > 0 ){
      url = `${url}?page=${page}`
    }
    return axios.get(url, option);
  };
  const DELETE = (keys) => {
    const codes = keys.map((code)=> `${keyName}[]=${code}`).join('&')
    return axios.delete(`${base}/${endpoint}?${codes}`, option);
  }

  return {
    GET,
    DELETE,
  };
}


