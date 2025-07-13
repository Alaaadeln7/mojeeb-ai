import { AxiosAPI } from '@/axios/axiosInstance';

export const getSections = async () => {
  const response = await AxiosAPI.get(`/api/v1/sections/`);
  return response.data;
};