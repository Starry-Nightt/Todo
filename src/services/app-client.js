import axios from "axios";

class AppClient {
  appClient = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 1000,
  });

  get(url, params = {}, config = {}) {
    const queryString = "?" + new URLSearchParams(params).toString();
    return this.appClient.get(url + queryString, config);
  }

  post(url, data = {}, config = {}) {
    return this.appClient.post(url, data, config);
  }

  put(url, data = {}, config = {}) {
    return this.appClient.put(url, data, config);
  }

  delete(url, config = {}) {
    return this.appClient.delete(url, config);
  }
}

export default new AppClient();
