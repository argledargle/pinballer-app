import config from "../config";
import TokenService from "./token-service";
import IdleService from "./idle-service";

const AuthApiService = {
  postUser(user) {
    console.log('API endpoint', `${config.API_ENDPOINT}/users`)
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postLogin({ user_nick_name, user_password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ user_nick_name, user_password })
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => {
        /*
        whenever a logint is performed:
        1. save the token in local storage
        2. queue auto logout when the user goes idle
        3. queue a call to the refresh endpoint based on the JWT's exp value
      */
        TokenService.saveAuthToken(res.authToken);
        IdleService.regiserIdleTimerResets();
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken();
        });
        // Use this console.log to see the response from the login
        // console.log(res)
        return res;
      });
  },
  postRefreshToken() {
    return fetch(`${config.API_ENDPOINT}/auth/refresh`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => {
        /*
        similar logic to whenever a user logs in, the only differences are:
        - we don't need to queue the idle timers again as the user is already logged in.
        - we'll catch the error here as this refresh is happening behind the scenes
      */
        TokenService.saveAuthToken(res.authToken);
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken();
        });
        return res;
      })
      .catch(err => {
        console.log("refresh token request error");
        console.error(err);
      });
  }
};

export default AuthApiService;
