import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import RepairList from '../common/RepairList';

const RepairRequest = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header isHome={true} navigation={navigation} />
      <Text
        style={{
          color: '#000',
          marginTop: 15,
          marginBottom: 15,
          fontSize: 22,
          fontWeight: 'bold',
          marginLeft: 28,
        }}>
        Repair Request
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RepairList
          atmNum={'ATM 1'}
          adrdress={`AGS, SBI, RT Nagar, Bangalore`}
          status={'Done'}
        />
        <RepairList
          atmNum={'ATM 2'}
          adrdress={`XYZ, ICICI, HSR Layout, Bangalore`}
          status={'Pending'}
        />
        <RepairList
          atmNum={'ATM 3'}
          adrdress={`ABC, AXIS Bank, Sulthanpalya, Bangalore`}
          status={'Done'}
        />
        <RepairList
          atmNum={'ATM 4'}
          adrdress={`AGS, SBI, RT Nagar, Bangalore`}
          status={'Pending'}
        />
      </ScrollView>
    </View>
  );
};

export default RepairRequest;
