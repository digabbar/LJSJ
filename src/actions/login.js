import axiosInstance from '../axiosInstance';
import Toast from 'react-native-toast-message';
export const login = async params => {
  try {
    console.log(params, 'param');
    const {data} = await axiosInstance.post('/api/auth/login', params);
    console.log(data, 'data');
    return data;
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'ERROR!',
      text2: error?.response?.data?.message,
    });
    throw error?.response?.data;
  }
};

export const verifyOtp = async params => {
  try {
    const {data} = await axiosInstance.post('/api/auth/verify', params);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error?.response?.data);
    throw error?.response?.data;
  }
};

export const resend = async params => {
  try {
    const {data} = await axiosInstance.post('/api/auth/resend', params);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error?.response?.data);
    throw error?.response?.data;
  }
};
