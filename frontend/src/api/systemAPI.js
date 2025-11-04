import apiClient from './apiClient';

// Fetch system metrics (CPU, RAM, etc.)
export const getSystemMetrics = async () => {
  const response = await apiClient.get('/system/metrics');
  return response.data;
};
