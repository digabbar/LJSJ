import {useLayoutEffect, useState} from 'react';
import Header from '../../components/Header';
import {CodeField} from 'react-native-confirmation-code-field';
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
import {verifyOtp} from '../../actions/login';
import images from '../../image';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../scaling';

const VerifyOTP = ({navigation, route}) => {
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
  console.log(route.params, 'param');
  const [otp, setOtp] = useState(route.params);
  const handleOtpChange = () => {
    setOtp(value);
    console.log('code');
  };
  const renderCell = ({index, symbol, isFocused}) => {
    // Customize cell rendering based on your needs
    return (
      <View
        key={index}
        style={[styles.codeCell, isFocused && styles.focusedCell]}>
        <Text style={styles.cellText}>
          {symbol || (isFocused ? '|' : null)}
        </Text>
      </View>
    );
  };

  const handleSubmit = () => {
    console.log('Submitted OTP:');
  };
  return (
    // <View style={{flex: 1, alignItems: 'center', backgroundColor: '#ffffff'}}>
    //   <View style={{marginTop: normalizeHeight(70)}}>
    //     <Image source={images.OTPVERIFY} style={{width: 200, height: 280}} />
    //     <Text style={{color: 'black'}}>Enter OTP </Text>
    //   </View>
    // </View>
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={{color: 'black'}}> {JSON.stringify(route.params)}</Text>
      <CodeField
        // value={otp}
        // onChangeText={handleOtpChange}
        cellCount={4} // Number of OTP digits
        autoFocus={true}
        variant="outlined"
        keyboardType="numeric"
        // cellProps={{style: styles.codeCell}}
        containerStyle={styles.codeContainer}
        renderCell={renderCell}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 60,
    marginHorizontal: normalizeWidth(10),
    color: 'black',
    backgroundColor: 'red',
  },
  codeCell: {
    borderBottomWidth: 2,
    borderColor: 'black',
    fontSize: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    color: 'black',
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'black',
    fontSize: 18,
  },
});
