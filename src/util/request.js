import axios from "axios"

export const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

})
