import axiosInstance from '../axiosInstance';
import Toast from 'react-native-toast-message';
export const login = async params => {
  try {
    console.log(params, 'param');
    const {data} = await axiosInstance.post('/api/auth/login', params);
    console.log(data, 'data');
    return data;
  } catch (error) {
    console.log(error);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'An error occurred. Please try again.',
    });
  }
};

export const verifyOtp = async params => {
  try {
    const {data} = await axiosInstance.post('/api/auth/verify', params);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
