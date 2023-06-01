import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

const Header = ({isHome, navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        paddingVertical: 15,
        borderBottomWidth: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {isHome ? (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <Icons
              name="chevron-back-outline"
              style={{color: '#fff', fontSize: 24, marginLeft: 20}}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 34,
            color: '#fff',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
          <Text style={{color: '#1F63AB', textAlign: 'center'}}>M</Text>audit
        </Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default Header;
