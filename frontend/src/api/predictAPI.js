import apiClient from './apiClient';

// Predict battery life
export const predictBatteryLife = async () => {
  const response = await apiClient.get('/predict/battery');
  return response.data;
};

// Detect high energy consumers
export const detectHighConsumers = async () => {
  const response = await apiClient.get('/predict/high_consumers');
  return response.data;
};
