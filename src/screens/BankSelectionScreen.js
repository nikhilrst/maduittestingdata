import {View, Text} from 'react-native';
import React from 'react';
import Heading from '../common/Heading';
import SelectionScreen from '../common/SelectionScreen';
import {useNavigation} from '@react-navigation/native';

const BankSelectionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <Heading />
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 28,
          fontWeight: '400',
          marginTop: 60,
          marginBottom: 20,
        }}>
        BANK SELECTION
      </Text>
      <View
        style={{
          borderWidth: 0.4,
          borderColor: '#fff',
          borderRadius: 4,
          width: '90%',
          alignSelf: 'center',
          paddingVertical: 20,
        }}>
        <SelectionScreen
          title={'IOBL'}
          onPress={() => {
            navigation.navigate('BtmNav');
          }}
        />
        <SelectionScreen
          title={'SBI FLM'}
          onPress={() => {
            navigation.navigate('BtmNav');
          }}
        />
        <SelectionScreen
          title={'PNB FLM'}
          onPress={() => {
            navigation.navigate('BtmNav');
          }}
        />
        <SelectionScreen
          title={'SIB FLM'}
          onPress={() => {
            navigation.navigate('BtmNav');
          }}
        />
        <SelectionScreen
          title={'AXIS FLM'}
          onPress={() => {
            navigation.navigate('BtmNav');
          }}
        />
      </View>
    </View>
  );
};

export default BankSelectionScreen;
