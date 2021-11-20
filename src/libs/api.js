import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  (config) => {
    // 요청 보내기 직전
    return config;
  },
  (error) => {
    return error.response;
  },
);

client.interceptors.response.use(
  (response) => {
    // 요청 도착 시
    return response;
  },
  (error) => {
    return error;
  },
);
