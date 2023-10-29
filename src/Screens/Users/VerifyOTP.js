import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import {getFontFamily} from '../../global';
import Header from '../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../scaling';
import {colors} from '../../global';
import {resend, verifyOtp} from '../../actions/login';
import images from '../../image';
const CELL_COUNT = 4;
const VerifyOTP = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const [otpText, setOtpText] = useState(route?.params?.otpSecret);
  const [error, setError] = useState('');
  const {mob} = route?.params;
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
  const verify = () => {
    if (value === otpText) {
      setError('');
      navigation.navigate('Home');
    } else {
      setError('Please enter a valid OTP ');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: '#6a4be3',
          fontFamily: getFontFamily(undefined, '500'),
          fontSize: normalizeFontSize(26),
        }}>
        OTP Verification
      </Text>
      <View
        style={{
          marginHorizontal: normalizeWidth(16),
          alignItems: 'center',
        }}>
        <Image
          source={images.OTPVERIFY}
          style={{width: normalizeWidth(220), height: normalizeHeight(220)}}
        />
        <Text
          style={{
            color: colors.primary,
            fontFamily: getFontFamily(undefined, '500'),
            textAlign: 'left',
          }}>
          Your OTP-{otpText}
        </Text>
        <Text
          style={{
            color: '#4056c7',
            fontFamily: getFontFamily(undefined, '500'),
            textAlign: 'center',
            lineHeight: normalizeHeight(16),
          }}>
          Please enter the Verification code{'\n'} sent to +91-{mob}
        </Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <Text style={styles.errorText}>{error}</Text>

      <Text
        style={{
          color: '#4056c7',
          fontSize: normalizeFontSize(16),
          marginTop: normalizeHeight(15),
          textAlign: 'right',
          width: '80%',
        }}
        onPress={() => {
          resend({
            mob: mob,
          })
            .then(res => {
              console.log(res);
              setOtpText(res?.data?.otpSecret);
            })
            .catch(e => {
              console.log(e);
            });
        }}>
        Resend
      </Text>
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
        onPress={verify}>
        <Text
          style={[
            styles.input,
            {
              color: 'white',
              fontFamily: getFontFamily(undefined, '500'),
              fontSize: normalizeFontSize(20),
              letterSpacing: 0.9,
            },
          ]}>
          VERIFY
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 50,
    height: 50,
    borderRadius: 5,
    lineHeight: 38,
    fontSize: 24,
    lineHeight: 45,
    color: 'black',
    borderWidth: 1,
    borderColor: '#7d8fe8',
    textAlign: 'center',
    margin: 10,
  },
  focusCell: {
    borderColor: '#000',
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    width: '65%',
  },
});

export default VerifyOTP;
