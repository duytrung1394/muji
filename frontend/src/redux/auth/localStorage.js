const key = 'idToken';

export function saveToken(token){
  localStorage.setItem(key, token);
}

export function clearToken(){
  localStorage.removeItem(key);
}

export function getToken(){
  return localStorage.getItem(key);
}
