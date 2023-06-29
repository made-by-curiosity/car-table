import axios from 'axios';

export function getCars() {
  return axios.get('https://myfakeapi.com/api/cars/');
}
