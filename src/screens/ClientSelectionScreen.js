import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Heading from '../common/Heading';
import SelectionScreen from '../common/SelectionScreen';
import {useNavigation} from '@react-navigation/native';

const ClientSelectionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/12911176/pexels-photo-12911176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        resizeMode="cover"
        style={{height: '100%', width: '100%'}}>
        <Heading />
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 28,
            fontWeight: '400',
            marginTop: 70,
            marginBottom: 30,
          }}>
          CLIENT SELECTION
        </Text>
        <SelectionScreen
          title={'N C R'}
          onPress={() => {
            navigation.navigate('BankSelectionScreen');
          }}
        />
        <SelectionScreen
          title={'A G S'}
          onPress={() => {
            navigation.navigate('BankSelectionScreen');
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default ClientSelectionScreen;
