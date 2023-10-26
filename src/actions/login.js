import axiosInstance from '../axiosInstance';

export const login = async params => {
  try {
    const {data} = await axiosInstance.post('/api/auth/login', params);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
