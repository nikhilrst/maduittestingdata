import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Input} from '@rneui/themed';

const CustomTextInput = ({
  placeholder,
  onChangeTextValue,
  isSecureTextEntry,
  iconsShow,
  rightImg,
  value,
}) => {
  return (
    <View
      style={{
        width: '85%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#fff',
        marginTop: 30,
      }}>
      <Input
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#fff'}
        secureTextEntry={isSecureTextEntry}
        onChangeText={onChangeTextValue}
        rightIcon={
          rightImg ? (
            <TouchableOpacity onPress={iconsShow}>
              {isSecureTextEntry ? (
                <Ionicons
                  name={'eye-off-outline'}
                  color={'#fff'}
                  size={25}
                  // style={{position: 'absolute', right: 18, top: 12}}
                />
              ) : (
                <Ionicons
                  name={'eye-outline'}
                  color={'#fff'}
                  size={25}
                  // style={{position: 'absolute', right: 18, top: 12}}
                />
              )}
            </TouchableOpacity>
          ) : (
            <></>
          )
        }
      />
    </View>
  );
};

export default CustomTextInput;
