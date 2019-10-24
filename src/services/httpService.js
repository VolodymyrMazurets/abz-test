import axios from "axios";

axios.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("token") || "";
    if (token) {
      config.headers["Token"] = token;
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

class HttpService {
  _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1';

  _fetchData = async (type, url, body = "") => {
    try {
      const data = await axios[type](url, body);
      return data;
    } catch (error) {
      console.log('error with fetch')
      throw error;
    }
  };

  getPositions = async () => {
    try {
      const { data } = await this._fetchData("get", `${this._apiBase}/positions`);
      return data;
    } catch(e) {
      throw ('Positions failed');
    }
  };
  getTotalUsers = async () => {
    try {
      const { data } = await this._fetchData("get", `${this._apiBase}/users/`);
      return data;
    } catch(e) {
      throw ('Users failed');
    }
  };
  getUsers = async (total_users) => {
    try {
      const { data } = await this._fetchData("get", `${this._apiBase}/users?page=1&count=${total_users}`);
      return data;
    } catch(e) {
      throw ('Users failed');
    }
  };
  getUser = async (id) => {
    try {
      const { data } = await this._fetchData("get", `${this._apiBase}/users/${id}`);
      return data;
    } catch(e) {
      throw ('Users failed');
    }
  };
  getToken = async () => {
    try {
      const { data } = await this._fetchData("get", `${this._apiBase}/token/`);
      return data;
    } catch(e) {
      throw ('Token failed');
    }
  };
  signup = async user => {
    try {
      const { data } = await this._fetchData("post", `${this._apiBase}/users/`, user);
      return data;
    } catch {
      throw ('Signup failed');
    }
  };
}

export default new HttpService();