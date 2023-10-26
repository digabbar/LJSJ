import {Text} from 'react-native';
import {useLayoutEffect} from 'react';
import HomeHeader from '../../components/HomeHeader';

const Home = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <HomeHeader />,
    });
  });
  return (
    <Text
      onPress={() => navigation.navigate('login')}
      style={{
        color: 'black',
      }}>
      login
    </Text>
  );
};

export default Home;
