import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import Icons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function CreateTicketScreen({navigation}) {
  const [isCalendarVisible, setIsCalenderVisible] = useState(false);

  const viewCalenadar = () => {
    setIsCalenderVisible(true);
  };

  const hideDatePicker = () => {
    setIsCalenderVisible(false);
  };

  const handleConfirm = date => {
    // console.warn('Selected date is', date);
    handleConfirm();
  };

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
          height: 90,
          backgroundColor: 'lightgrey',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.8,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            borderRightWidth: 1,
            borderRightColor: '#A9A9A9',
          }}>
          <Text
            style={{
              fontSize: 24,
              color: '#000',
              fontWeight: '800',
              textAlign: 'center',
            }}>
            TAT
          </Text>
        </View>
        <View
          style={{
            flex: 1.8,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icons name="time-outline" color={'#000'} size={33} />
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 28,
              marginHorizontal: 5,
            }}>
            03 -
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: '400',
            }}>
            Hours Repair
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 90,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{marginHorizontal: 20}}>
          <Text style={{color: '#000', fontSize: 23, textAlign: 'center'}}>
            Issue Date
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity
            onPress={viewCalenadar}
            style={{
              borderWidth: 0.7,
              borderColor: '#000',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 3,
              marginHorizontal: 10,
            }}>
            <Icons
              name="calendar-outline"
              style={{color: '#1E90FF', fontSize: 17, marginHorizontal: 7}}
            />
            <Text style={{color: '#000', fontSize: 16, marginRight: 10}}>
              Select Date
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isCalendarVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
      <View style={{marginLeft: 20}}>
        <Text style={{fontSize: 26, color: '#000', fontWeight: '600'}}>
          DOOR
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginTop: 20,
            width: '95%',
            height: 80,
            borderWidth: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
          }}>
          <Text style={{fontSize: 23, color: '#000', fontWeight: '600'}}>
            Paint Issue
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginTop: 20,
            width: '95%',
            height: 80,
            borderWidth: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
          }}>
          <Text style={{fontSize: 23, color: '#000', fontWeight: '600'}}>
            Tilted
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{position: 'absolute', bottom: 120, right: 40}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CameraScreen');
          }}>
          <Icons name="camera-outline" size={40} color={'#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
