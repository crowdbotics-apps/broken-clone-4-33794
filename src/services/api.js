import axios from 'axios';

const { REACT_APP_API_TOKEN } = process.env;

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${REACT_APP_API_TOKEN || "K8beq2L1OIyUkYId0EBkJYiM689kXplW"}`
  },
});

export default class API {
  
  static get(url, params = {}) {
    return instance({
      method: 'GET',
      url,
      params
    })
  }

  static post(url, data = {}, params = {}) {
    return instance({
      method: 'POST',
      url,
      data,
      params
    })
  };

  static put(url, data = {}, params = {}) {
    return instance({
      method: 'PUT',
      url,
      data,
      params
    });
  };

  static delete(url, params = {}, data = {}) {
    return instance({
      method: 'DELETE',
      url,
      data,
      params
    })
  }
};
