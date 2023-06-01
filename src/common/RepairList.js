import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Thanks from '../screens/Thanks';
import {useNavigation} from '@react-navigation/native';

export default function RepairList({atmNum, adrdress, status}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        width: '85%',
        height: 150,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 28,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: status == 'Done' ? 'green' : 'orange',
      }}>
      <View style={{height: '50%', width: '100%'}}>
        <View style={{marginLeft: 20, marginVertical: 15}}>
          <Text style={{fontSize: 20, color: '#000'}}>{atmNum}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: -3,
            }}>
            <Icons
              name="location-outline"
              size={14}
              color={status == 'Done' ? '#228B22' : 'orange'}
            />
            <Text style={{color: '#000', marginHorizontal: 4}}>{adrdress}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: '50%',
          width: '100%',
          backgroundColor: status == 'Done' ? '#F0FFF0' : '#FFE4B5',
        }}>
        <View style={{marginLeft: 20, marginVertical: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Octicons
              name="pencil"
              style={{
                fontSize: 14,
                color: status == 'Done' ? '#228B22' : 'orange',
              }}
            />
            <Text
              style={{
                color: '#000',
                marginHorizontal: 4,
                marginLeft: 4,
                fontWeight: '400',
                letterSpacing: 1,
                fontSize: 16,
              }}>
              Details
            </Text>
          </View>
          <Text
            style={{
              color: '#000',
              marginTop: 2,
              marginLeft: 18,
              fontSize: 14,
              letterSpacing: 1,
            }}
            ellipsizeMode="tail"
            numberOfLines={1}>
            Details content description ...
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          status == 'Done'
            ? navigation.navigate('Thanks')
            : navigation.navigate('CreateIssue')
        }
        style={{position: 'absolute', bottom: 20, right: 15}}>
        <Icons name="arrow-forward-outline" size={28} color={'#000'} />
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          right: 10,
          top: 5,
          paddingHorizontal: 10,
          paddingVertical: 2,
          borderColor: status == 'Done' ? 'green' : 'orange',
          backgroundColor: status == 'Done' ? '#F0FFF0' : '#FFF5EE',
        }}>
        <Octicons
          name="dot-fill"
          style={{
            fontSize: 10,
            color: status == 'Done' ? '#228B22' : 'orange',
          }}
        />
        <Text style={{color: '#000', marginLeft: 5}}>{status}</Text>
      </View>
    </View>
  );
}
