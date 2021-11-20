import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:4000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async ({ uri }) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await client.get(uri);
    return data.data;
  } catch (err) {
    throw err;
  }
};

export const postData = async ({ uri, data }) => {
  await client.post(uri, {
    data,
  });
};

// client.interceptors.request.use(
//   (config) => {
//     // 요청 보내기 직전
//     return config;
//   },
//   (error) => {
//     return error.response;
//   },
// );

// client.interceptors.response.use(
//   (response) => {
//     // 요청 도착 시
//     return response;
//   },
//   (error) => {
//     return error;
//   },
// );
