import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Octions from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

const Task = ({atmnum, branchName, branchAdd, status, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        status == 'Done'
          ? navigation.navigate('Thanks')
          : navigation.navigate('CreateIssue');
      }}
      style={{
        flexDirection: 'row',
        marginVertical: 10,
        width: '90%',
        borderWidth: 1,
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 6,
        borderColor:
          status == 'Done' ? 'green' : status == 'Pending' ? 'orange' : 'blue',
      }}>
      <View
        style={{
          flex: 0.4,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginRight: 10,
        }}>
        <Octions
          name="dot-fill"
          style={{
            fontSize: 18,
            marginHorizontal: 10,
            color:
              status == 'Done'
                ? '#228B22'
                : status == 'Pending'
                ? 'orange'
                : 'blue',
          }}
        />
        <Text style={{fontSize: 20, color: '#000'}}>{atmnum}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 15, color: '#000', fontWeight: '500'}}>
          {branchName}
        </Text>
        <Text style={{color: '#000'}}>{branchAdd}</Text>
      </View>
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
          borderColor:
            status == 'Done'
              ? 'green'
              : status == 'Pending'
              ? 'orange'
              : 'blue',
          backgroundColor:
            status == 'Done'
              ? '#F0FFF0'
              : status == 'Pending'
              ? '#FFF5EE'
              : 'blue',
        }}>
        <Octions
          name="dot-fill"
          style={{
            fontSize: 10,
            color:
              status == 'Done'
                ? '#228B22'
                : status == 'Pending'
                ? 'orange'
                : 'blue',
          }}
        />
        <Text style={{color: '#000', marginLeft: 5}}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
