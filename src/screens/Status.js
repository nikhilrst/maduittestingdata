import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import Icons from 'react-native-vector-icons/Ionicons';
import CheckList from '../common/CheckList';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useNavigation} from '@react-navigation/native';

const Status = () => {
  const navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const dateView = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff'}}
      showsVerticalScrollIndicator={false}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: 'bold',
              paddingVertical: 20,
              paddingLeft: 15,
            }}>
            Status/History
          </Text>
        </View>
        {/* date selection section */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Date View */}
          {/* From calendar view section*/}
          <TouchableOpacity
            onPress={dateView}
            style={{
              borderWidth: 1,
              marginRight: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 3,
            }}>
            <Icons
              name="calendar-outline"
              style={{color: '#1E90FF', fontSize: 14, marginLeft: 5}}
            />
            <Text style={{color: '#000', marginLeft: 10, fontSize: 16}}>
              From
            </Text>
            <Icons
              name="chevron-down-outline"
              style={{color: '#000', fontSize: 14, marginHorizontal: 6}}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          {/* end calendar view section */}
          <TouchableOpacity
            onPress={dateView}
            style={{
              borderWidth: 1,
              marginRight: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 3,
            }}>
            <Icons
              name="calendar-outline"
              style={{color: '#1E90FF', fontSize: 14, marginLeft: 5}}
            />
            <Text style={{color: '#000', marginLeft: 10, fontSize: 16}}>
              End
            </Text>
            <Icons
              name="chevron-down-outline"
              style={{color: '#000', fontSize: 14, marginHorizontal: 6}}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
      <CheckList
        title={'Pending Checklist'}
        nums={'5'}
        status={'Pending'}
        onPress={() => navigation.navigate('PendingCheckList')}
      />
      <CheckList
        title={'Repair Request'}
        nums={'2'}
        status={'Request'}
        onPress={() => navigation.navigate('RepairRequest')}
      />
      <CheckList
        title={'Completed Checklist'}
        nums={'20'}
        status={'Complete'}
        onPress={() => navigation.navigate('CompletedCheckList')}
      />
    </ScrollView>
  );
};

export default Status;
