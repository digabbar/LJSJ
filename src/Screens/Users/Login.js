import {useLayoutEffect, useState} from 'react';
import Header from '../../components/Header';
import {
  Text,
  View,
  Image,
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
import {getFontFamily} from '../../global';

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
  const [field, setField] = useState({});
  const [error, setError] = useState({});

  const validateContactNumber = inputNumber => {
    if (!inputNumber) {
      setError(prev => ({
        ...prev,
        number: 'Contact number is required',
      }));
      return false;
    } else if (!/^[5-9][0-9]{9}$/.test(inputNumber)) {
      setError(prev => ({
        ...prev,
        number:
          'Contact number must be 10 digits long and start with a digit greater than 6',
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
    let valid = true;
    if (!validateContactNumber(field?.number)) {
      valid = false;
    }
    if (valid) {
      login({
        mob: field?.number,
      })
        .then(res => {
          navigation.navigate('verify', {
            mob: res?.data?.mobile,
            otpSecret: res?.data?.otpSecret,
          });
        })
        .catch(error => {
          console.log(error, 'soham');
        });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: normalizeHeight(16),
      }}
      behavior="padding">
      <Text style={styles.loginText}>LOGIN ACCOUNT </Text>

      <View
        style={{
          alignItems: 'center',
          width: '100%',
        }}>
        <Image
          source={images.LOGINNUM}
          style={{
            width: normalizeWidth(230),
            height: normalizeHeight(230),
            resizeMode: 'contain',
          }}
        />
        <Text style={styles.signIn}>Sign In </Text>
        <Text style={styles.mobileNum}>Enter Mobile Number</Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
            alignItems: 'center',
            borderRadius: 10,
            width: '90%',
            paddingHorizontal: normalizeWidth(16),
          }}>
          <View
            style={{
              borderRightWidth: 1,
              paddingRight: normalizeWidth(5),
            }}>
            <Text style={styles.input}>+91</Text>
          </View>
          <View style={{flex: 1}}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={10}
              placeholder="9876545658"
              placeholderTextColor={'#cccbd1'}
              onChangeText={data => {
                setField(prev => {
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
        </View>
        {error.number && (
          <Text style={{color: 'red', textAlign: 'right', width: '90%'}}>
            {error.number}
          </Text>
        )}

        <TouchableOpacity
          style={{
            height: normalizeHeight(40),
            width: normalizeWidth(160),
            borderRadius: normalizeHeight(10),
            backgroundColor: '#6a4be3',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: normalizeHeight(30),
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
    fontFamily: getFontFamily(undefined, '500'),
    marginTop: normalizeHeight(5),
  },
  loginText: {
    color: 'black',
    fontSize: normalizeFontSize(24),
    fontWeight: '500',
  },
  input: {
    color: 'black',
    fontSize: normalizeFontSize(20),
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  mobileNum: {
    color: 'black',
    marginVertical: normalizeHeight(10),
    fontSize: normalizeFontSize(18),
    fontWeight: '500',
  },
});
