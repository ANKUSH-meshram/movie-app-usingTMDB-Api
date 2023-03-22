import axios from "axios";

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: "application/json"
  },
  params: {
    api_key: 'e295eed65e79351299973af64e4b6832'
  }
})