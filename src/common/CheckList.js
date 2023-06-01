import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CheckList = ({nums, title, status, onPress}) => {
  return (
    <View
      style={{
        flex: 1,
        width: '87%',
        height: 80,
        marginTop: 30,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          width: '87%',
          height: 80,
          borderWidth: 1,

          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          borderColor:
            status == 'Pending'
              ? 'orange'
              : status == 'Request'
              ? 'blue'
              : 'green',
        }}>
        <View
          style={{
            flex: 0.3,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:
              status == 'Pending'
                ? 'orange'
                : status == 'Request'
                ? 'blue'
                : 'green',
          }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: 1,
            }}>
            {nums < 10 ? `0${nums}` : nums}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            backgroundColor:
              status == 'Pending'
                ? '#FFF5EE'
                : status == 'Request'
                ? '#F0F8FF'
                : '#F0FFF0',
          }}>
          <Text style={{marginLeft: 25, fontSize: 24, color: '#000'}}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CheckList;
