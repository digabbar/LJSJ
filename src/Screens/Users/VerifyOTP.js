import {useLayoutEffect} from 'react';
import Header from '../../components/Header';
const VerifyOTP = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          title={'Login'}
          showBackButton={true}
          onBackPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, []);
  return null;
};

export default VerifyOTP;
