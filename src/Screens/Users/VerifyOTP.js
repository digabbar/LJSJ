import {View, StyleSheet, Text} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
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
import {resend} from '../../actions/login';
const CELL_COUNT = 4;
const VerifyOTP = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const [otpText, setOtpText] = useState(route?.params?.otpSecret);
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

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginHorizontal: normalizeWidth(16)}}>
        <Text style={{color: colors.primary, fontSize: normalizeHeight(28)}}>
          {mob}
        </Text>
        <Text style={{color: colors.primary, fontSize: normalizeHeight(28)}}>
          OTP-{otpText}
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
        <Text
          style={{color: colors.primary, fontSize: normalizeFontSize(24)}}
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
      </View>
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
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default VerifyOTP;
