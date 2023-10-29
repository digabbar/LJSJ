import {Text, View} from 'react-native';
import {useLayoutEffect} from 'react';
import HomeHeader from '../../components/HomeHeader';

const Home = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <HomeHeader />,
    });
  });
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text
        onPress={() => navigation.navigate('login')}
        style={{
          color: 'black',
        }}>
        login
      </Text>
    </View>
  );
};

export default Home;
