import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomBtn = ({
  onPress,
  title,
  bgColor,
  textColor,
  disabled,
  letterSpacing,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        onPress();
      }}
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
      }}>
      <Text
        style={{
          letterSpacing: letterSpacing,
          color: textColor,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;
