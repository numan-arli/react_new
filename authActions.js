
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./actionTypes";

// Thunk action: API çağrısını burada yapıyoruz
export const login = (username, password) => {
  debugger;
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json(); 
      // backend’den { token: "...", username: "admin" } gibi bir şey dönecek

      localStorage.setItem("token", data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: data.token, username },
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.message || "Login error",
      });
    }
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};












/*
import { LOGIN_SUCCESS, LOGIN_FAIL,LOGOUT } from "./actionTypes";

// API çağrısı
export function loginApi(username, password) {
  debugger;
  return fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Login failed");
      }
      return res.json();
    })
    .then(data => {
      if (data && data.token) {
        debugger;
        localStorage.setItem("token", data.token);
        return data.token; // ✅ sadece token return et
      }
      throw new Error("Token not found in response");
    });
}

// Redux Thunk ile action
export function login(username, password) {
  debugger;
  return function (dispatch) {
    return loginApi(username, password)
      .then((token) => {
        dispatch({ type: LOGIN_SUCCESS, payload: {token, username} });
      })
      .catch((error) => {
        dispatch({ type: LOGIN_FAIL, payload: error.message });
      });
  };
}

export function logout() {
  return function (dispatch) {
    localStorage.removeItem("token"); // ✅ token sil
    dispatch({ type: LOGOUT });
  };
}

*/




/*fetch("http://localhost:8080/api/products", {
  headers: {
    "Authorization": "Bearer " + localStorage.getItem("token")
  }
})*/

