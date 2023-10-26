import {NavigationContainer} from '@react-navigation/native';
import Root from './src/navigation';
import {SafeAreaView} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
