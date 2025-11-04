// import apiClient from './apiClient';

// // Fetch process logs
// export const getProcessLogs = async () => {
//   const response = await apiClient.get('/processes/log');
//   return response.data;
// };

// // Trigger new log entry (optional)
// export const createProcessLog = async () => {
//   const response = await apiClient.post('/processes/log');
//   return response.data;
// };




import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/processes";

export const logProcesses = async () => {
  return await axios.post(`${BASE_URL}/log`);
};

export const getLatestProcesses = async () => {
  return await axios.get(`${BASE_URL}/latest`);
};
