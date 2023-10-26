import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import images from '../image';
import {normalizeHeight, normalizeWidth} from '../scaling';

import {colors, getFontFamily} from '../global';
import {normalizeFontSize} from '../scaling';

const Header = ({title, onBackPress, isNotShown = true}) => {
  if (isNotShown) {
    return null;
  }
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={onBackPress}>
          <Image
            source={images.BACKICON}
            style={{
              width: normalizeHeight(20),
              height: normalizeHeight(20),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: normalizeHeight(50),

    backgroundColor: 'white',
    paddingHorizontal: normalizeWidth(16),
  },
  title: {
    fontSize: normalizeFontSize(20),
    fontFamily: getFontFamily(undefined, '600'),
    // flex: 1, // Ensures the title takes up remaining space
    textAlign: 'center',
    color: 'black',
    marginLeft: normalizeWidth(10),
  },
};

export default Header;
