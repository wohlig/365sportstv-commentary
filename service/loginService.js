import axios from "axios";
const loginUrl = process.env.NUXT_ENV_LOGIN_URL;

export default {
  masterLogin(data) {
    return axios.post(`${loginUrl}/user/masterLogin`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
