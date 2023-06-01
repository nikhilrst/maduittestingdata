import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';

export default function Thanks() {
  const navigation = useNavigation();

  // const takePicture = async () => {
  //   try {
  //     const data = await camera.takePictureAsync();
  //     console.log('Path to images', data.uri);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{position: 'absolute', top: 10, right: 15}}>
        <Icons name="close-outline" size={32} color={'#000'} />
      </TouchableOpacity>

      {/* Camera View */}
      {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <RNCamera>
          <TouchableOpacity onPress={takePicture} style={{}}>
            <Icons name="camera-outline" size={32} />
          </TouchableOpacity>
        </RNCamera>
      </View> */}

      <View
        style={{height: '75%', justifyContent: 'center', alignItems: 'center'}}>
        <Icons name="checkmark-circle-outline" size={200} color={'#90EE90'} />
        <Text style={{fontSize: 52, letterSpacing: 1, color: '#90EE90'}}>
          Thanks
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 24,
            marginTop: 10,
            color: '#000',
          }}>
          ATM check has been
        </Text>
        <Text style={{alignSelf: 'center', fontSize: 24, color: '#000'}}>
          Completed
        </Text>
      </View>
      <View
        style={{
          width: '85%',
          borderWidth: 2,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#90EE90',
          borderRadius: 3,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 22,
            fontWeight: '500',
            paddingVertical: 15,
          }}>
          100%
        </Text>
      </View>
    </View>
  );
}
