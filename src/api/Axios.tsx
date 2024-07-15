import axios from 'axios';

const baseUrl = 'http://localhost:8888'; // 로컬 서버
// const baseUrl = 'https://port-0-docktori-server-ly5qmhc1cd365acd.sel5.cloudtype.app'; // 배포 서버

const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

