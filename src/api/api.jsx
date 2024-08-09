import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/",
  withCredentials: true,
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
});

async function request(endpoint, method, query, body) {
  try {
    const response = api({ method, url: endpoint, params: query, data: body });
    return { ok: true, data: response.data };
  } catch (err) {
    return { ok: false, data: err.data };
  }
}

function get(endpoint, query, body) {
  return request(endpoint, "get", query, body);
}

function post(endpoint, query, body) {
  return request(endpoint, "post", query, body);
}

function del(endpoint, query, body) {
  return request(endpoint, "delete", query, body);
}

function put(endpoint, query, body) {
  return request(endpoint, "pu", query, body);
}

export default { get, post, del, put };
