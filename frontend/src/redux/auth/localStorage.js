const key = "idToken";

export function saveToken(token) {
  if (typeof localStorage === "undefined") {
    return null;
  }

  localStorage.setItem(key, token);
}

export function clearToken() {
  if (typeof localStorage === "undefined") {
    return null;
  }

  localStorage.removeItem(key);
}

export function getToken() {
  if (typeof localStorage === "undefined") {
    return null;
  }
  const token = localStorage.getItem(key);
  if (token) {
    return token;
  } else {
    return null;
  }
}
