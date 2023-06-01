import {View, Text} from 'react-native';
import React from 'react';
import Header from '../common/Header';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Text style={{color: '#000', alignSelf: 'center'}}>Profile</Text>
    </View>
  );
};

export default Profile;
