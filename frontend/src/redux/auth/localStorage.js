const key = "idToken";

export function saveToken(token) {
  localStorage.setItem(key, token);
}

export function clearToken() {
  localStorage.removeItem(key);
}

export function getToken() {
  const token = localStorage.getItem(key);
  if (token) {
    return token;
  } else {
    return null;
  }
}
