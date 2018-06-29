import api from './api.js';

export function RESTEntityApi(endpoint, keyName='codes'){
  const GET = (primary_key) =>
    api.get(`${endpoint}/${primary_key}`);
  const POST = (body) =>
    api.post(endpoint, body);
  const PUT = (primary_key, body) =>
    api.put(`${endpoint}/${primary_key}`, body);
  const DELETE = (primary_key) => {
    return api.delete(endpoint, {
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
    let url = endpoint;
    if( page && page > 0 ){
      url = `${url}?page=${page}`
    }
    return api.get(url);
  };
  const DELETE = (keys) => {
    return api.delete(endpoint, {
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


