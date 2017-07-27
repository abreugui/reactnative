import axios from 'axios';

class Request {
  getInfo() {
    const URL = 'http://api.dev.evtkt.com.br/eventos/banners';
    return axios.get(URL);
  }
}

export default new Request();
