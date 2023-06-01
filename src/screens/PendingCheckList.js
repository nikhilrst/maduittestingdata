import {View, Text} from 'react-native';
import React from 'react';
import Header from '../common/Header';

const PendingCheckList = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header isHome={true} navigation={navigation} />
      <Text
        style={{
          color: '#000',
          alignSelf: 'center',
          marginVertical: 10,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Pending CheckList
      </Text>
    </View>
  );
};

export default PendingCheckList;
