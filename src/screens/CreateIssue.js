import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function CreateIssue() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header isHome={true} navigation={navigation} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 80,
        }}>
        <View style={{width: '40%', flex: 0.7}}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#000',
              fontSize: 22,
              fontWeight: '600',
              marginLeft: 10,
            }}>
            ATM 1
          </Text>
        </View>
        <View
          style={{
            width: '60%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Icons name="cash-outline" size={40} color={'#000'} />
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={{color: '#000'}}>SBI Flm</Text>
            <Text style={{color: '#000'}}>AGS, RT Nagar, Bangalore</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 100,
          backgroundColor: 'lightgrey',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            borderRightWidth: 1,
            borderRightColor: '#A9A9A9',
          }}>
          <Icons name="cash-outline" size={32} color={'#000'} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 28,
              color: '#000',
              fontWeight: '800',
              textAlign: 'center',
            }}>
            0%
          </Text>
        </View>
        <View
          style={{
            flex: 1.8,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal: 8,
          }}>
          <Icons name="location-outline" color={'#708090'} size={28} />
          <Text style={{color: '#708090'}}>Geo Fencing : </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: '500',
              // letterSpacing: 1,
            }}>
            RT, Nagar, Bangalore
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 60}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateTicketScreen');
          }}
          style={{
            width: '80%',
            height: 60,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1E90FF',
          }}>
          <Text
            style={{
              letterSpacing: 1,
              color: '#fff',
              fontSize: 28,
              fontWeight: '600',
            }}>
            START
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
