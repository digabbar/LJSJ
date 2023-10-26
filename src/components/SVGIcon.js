import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg'; // Using react-native-svg library

const SVGIcon = ({svgData, width, height}) => {
  return (
    <View>
      <SvgXml xml={svgData} width={width} height={height} />
    </View>
  );
};

export default SVGIcon;
