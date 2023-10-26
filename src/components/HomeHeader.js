import {StyleSheet, View, Text} from 'react-native';
import {normalizeFontSize, normalizeHeight, normalizeWidth} from '../scaling';
import {colors, getFontFamily} from '../global';
const HomeHeader = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>Soham</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerView: {
    height: normalizeHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontFamily: getFontFamily(undefined, '600'),
    fontSize: normalizeFontSize(24),
    letterSpacing: 2,
    color: 'black',
  },
});

export default HomeHeader;
