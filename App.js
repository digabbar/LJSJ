import {NavigationContainer} from '@react-navigation/native';
import Root from './src/navigation';
import {SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </SafeAreaView>
      <Toast />
    </>
  );
};

export default App;
