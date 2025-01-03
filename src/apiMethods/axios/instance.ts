import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_YT_URL,
  params: {
    key: process.env.REACT_APP_YT_API_KEY,
  },
})
