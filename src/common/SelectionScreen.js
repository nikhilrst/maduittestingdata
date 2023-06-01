import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const SelectionScreen = ({title, onPress}) => {
  // const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '85%',
        // paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10,
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 15,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 24, color: '#000'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectionScreen;
