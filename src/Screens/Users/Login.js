import {useLayoutEffect} from 'react';
import Header from '../../components/Header';
import {Text, View} from 'react-native';
import {login} from '../../actions/login';
const Login = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          title={'Login'}
          showBackButton={true}
          onBackPress={() => {
            navigation.goBack();
          }}
          isNotShown={true}
        />
      ),
    });
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => {
          login({
            mob: '7704049123',
          })
            .then(res => {
              console.log(res);
            })
            .catch(e => {
              console.log(e, 'soham');
            });
        }}
        style={{color: 'black'}}>
        Soham kumar jshgshgsh shsghsghs
      </Text>
    </View>
  );
};

export default Login;
