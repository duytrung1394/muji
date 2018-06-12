const axios = require('axios');

const headers = {
  'Accept': 'application/json',
  'content-type': 'application/json',
};
const option = { headers };

const base = "http://localhost:8080";

export function RESTEntityApi(endpoint){
  const GET = (id) =>
    axios.get(`${base}/${endpoint}/${id}`, option);
  const POST = (body) =>
    axios.post(`${base}/${endpoint}/`, body, option);
  const PUT = (id, body) =>
    axios.put(`${base}/${endpoint}/${id}`, body, option);
  const DELETE = (id) =>
    axios.delete(`${base}/${endpoint}/${id}`, option);

  return {
    GET,
    POST,
    PUT,
    DELETE,
  };
}

export function RESTListApi(endpoint){
  const GET = (page) => {
    let url = `${base}/${endpoint}`;
    if( page && page > 0 ){
      url = `${url}?page=${page}`
    }
    return axios.get(url, option);
  };
  const DELETE = (ids) =>
    axios.delete(`${base}/${endpoint}`, {
      ...option,
      params: {ids: ids.join(',') },
    });

  return {
    GET,
    DELETE,
  };
}


