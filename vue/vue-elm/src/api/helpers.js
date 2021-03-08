import axios from 'axios'

const baseUrl = 'www.baidu.com';

export function get(url) {
  return function(params = {}) {
    return axios.get(baseUrl + url)
  }
}