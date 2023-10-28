import {useLayoutEffect, useState} from 'react';
import Header from '../../components/Header';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {login} from '../../actions/login';
import images from '../../image';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../scaling';
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
  const [number, setNumber] = useState(' ');
  const [error, setError] = useState();
  // console.log(number, 'number');

  const validateContactNumber = inputNumber => {
    if (!inputNumber) {
      setError(prev => ({
        ...prev,
        number: 'Contact number is required',
      }));
      return false;
    } else if (!/^[0-9]+$/.test(inputNumber)) {
      setError(prev => ({
        ...prev,
        number: 'Contact number can only contain numbers',
      }));
      return false;
    } else {
      setError(prev => ({
        ...prev,
        number: null,
      }));
      return true;
    }
  };

  const loginApi = () => {
    console.log('priya111');
    let valid = true;
    if (!validateContactNumber(number)) {
      console.log('check22');
      valid = false;
    }
    // if (valid) {
    console.log('priyanka');
    login({
      mob: number.number,
    })
      .then(res => {
        console.log(res, 'login response-----');
        navigation.navigate('verify', {
          // frompage: 'login',
          otpSecret: res.data.otpSecret,
        });
      })
      .catch(error => {
        console.error(error);
      });
    // }
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: normalizeHeight(16),
      }}>
      <Text style={styles.loginText}>LOGIN ACCOUNT </Text>

      <View
        style={{
          marginTop: normalizeHeight(70),
          alignItems: 'center',
        }}>
        <Image
          source={images.LOGINNUM}
          style={{width: normalizeWidth(200), height: normalizeHeight(200)}}
        />
        <Text style={styles.signIn}>Sign In </Text>
        <Text style={styles.mobileNum}>Enter Mobile Number</Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            width: normalizeWidth(160),
          }}>
          <View
            style={{
              borderRightWidth: 1,
              paddingRight: normalizeWidth(5),
            }}>
            <Text style={styles.input}>+91</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={10}
            placeholder="9876545658"
            placeholderTextColor={'#cccbd1'}
            // onChangeText={() => {
            //   console.log('checknow');
            // }}
            onChangeText={data => {
              setNumber(prev => {
                return {
                  ...prev,
                  number: data,
                };
              });
              setError(prev => {
                return {
                  ...prev,
                  number: null,
                };
              });
            }}
          />
        </View>
        {/* {error.number && <Text style={{color: 'red'}}>{error.number}</Text>} */}

        <TouchableOpacity
          style={{
            height: normalizeHeight(40),
            width: normalizeWidth(160),
            borderRadius: normalizeHeight(10),
            backgroundColor: '#6a4be3',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: normalizeHeight(80),
          }}
          onPress={loginApi}>
          <Text style={[styles.input, {color: 'white'}]}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
const styles = StyleSheet.create({
  signIn: {
    color: 'black',
    fontSize: normalizeFontSize(28),
    fontWeight: '500',
  },
  loginText: {
    color: 'black',
    fontSize: normalizeFontSize(24),
    fontWeight: '500',
  },
  input: {
    color: 'black',
    // width: normalizeWidth(120),
    fontSize: normalizeFontSize(20),
    fontWeight: '500',
    letterSpacing: 0.1,
    // paddingLeft: normalizeWidth(10),
    // textAlign: 'center',
  },
  mobileNum: {
    color: 'black',
    marginVertical: normalizeHeight(10),
    fontSize: normalizeFontSize(18),
    fontWeight: '500',
  },
});
