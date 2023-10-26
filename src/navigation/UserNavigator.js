import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {normalizeFontSize, normalizeHeight} from '../scaling';
import SVGIcon from '../components/SVGIcon';
import {TABONE, TABTWO, TABTHREE, TABFOUR} from '../image/svg/index';
import {getFontFamily} from '../global';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// write import below this
import Home from '../Screens/Users/Home';
import Category from '../Screens/Users/Category';
import Cart from '../Screens/Users/Cart';
import Account from '../Screens/Users/Account';
import Login from '../Screens/Users/Login';
import VerifyOTP from '../Screens/Users/VerifyOTP';
import HomeHeader from '../components/HomeHeader';

// write import above this

const Tap = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: normalizeHeight(10),
          fontFamily: getFontFamily(undefined, '600'),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <SVGIcon svgData={TABONE} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({color, size}) => (
            <SVGIcon svgData={TABTWO} width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <SVGIcon svgData={TABTHREE} width={size} height={size} />
          ),
          tabBarBadge: 4,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => (
            <SVGIcon svgData={TABFOUR} width={size} height={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const UserNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tap"
        component={Tap}
        options={({navigation}) => ({
          header: () => <HomeHeader />, // Use your custom header component
        })}
      />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="verify" component={VerifyOTP} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
