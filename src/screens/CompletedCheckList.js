import {View, Text} from 'react-native';
import React from 'react';
import Header from '../common/Header';

const CompletedCheckList = ({navigation}) => {
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
        Completed CheckList
      </Text>
    </View>
  );
};

export default CompletedCheckList;
