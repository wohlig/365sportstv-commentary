import axios from 'axios'
const ApiUrl = process.env.NUXT_ENV_API_URL

export default {
  getActiveNanoGamesForCommentary() {
    return axios.get(`${ApiUrl}/game/getActiveNanoGamesForCommentary`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.accessToken,
      },
    })
  },
  getActiveMediaGamesForCommentary() {
    return axios.get(`${ApiUrl}/game/getActiveAntmediaGamesForCommentary`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.accessToken,
      },
    })
  },
  // getActiveZoomGamesForCommentary() {
  //   return axios.get(`${ApiUrl}/game/getActiveZoomGamesForCommentary`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: localStorage.accessToken,
  //     },
  //   })
  // },
}
