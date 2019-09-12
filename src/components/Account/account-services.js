import config from "../../config";

const AccountServices = {
  getUser(user) {
    console.log("API endpoint", `${config.API_ENDPOINT}/users/${this.context.pinballer_user_id}`);
    return fetch(`${config.API_ENDPOINT}/users/${this.context.pinballer_user_id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      .then(console.log('account-services',res.json()))
    );
  }
};

export default AccountServices;
