import {Text, TouchableOpacity, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Icons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Task from '../common/Task';
import ChartWindow from './ChartWindow';
import Geolocation from '@react-native-community/geolocation';

const Home = () => {
  const [position, setPosition] = useState({
    latitude: 13.026138058933261,
    longitude: 77.60931212619192,
    latitudeDelta: 0.0421,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    });
  }, []);

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <Header />
      {/* Map */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: 240}}
          initialRegion={position}>
          <Marker
            title="Yor are here"
            // description="This is a description"
            coordinate={position}
          />
        </MapView>
      </View>
      {/* Map Button View */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 80,
          backgroundColor: '#fff',
          elevation: 12,
        }}>
        <TouchableOpacity
          style={{
            flex: 1.2,
            alignItems: 'center',
            borderRightWidth: 1,
            borderRightColor: 'lightgrey',
            height: '100%',
          }}>
          <Icons
            name="settings-outline"
            style={{fontSize: 22, color: '#000', marginTop: 20}}
          />
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              color: '#000',
              textAlign: 'center',
            }}>
            Repair Request
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 0.8,
            alignItems: 'center',
            borderRightWidth: 1,
            borderRightColor: 'lightgrey',
            height: '100%',
          }}>
          <SimpleLineIcons
            name="flag"
            style={{fontSize: 22, color: '#000', marginTop: 20}}
          />
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              color: '#000',
              textAlign: 'center',
            }}>
            Task
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            borderRightWidth: 1,
            borderRightColor: 'lightgrey',
            height: '100%',
          }}>
          <SimpleLineIcons
            name="pin"
            style={{fontSize: 22, color: '#000', marginTop: 20}}
          />
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              color: '#000',
              textAlign: 'center',
            }}>
            GEO Fencing
          </Text>
        </TouchableOpacity>
      </View>
      {/* Chart View */}
      <View
        style={{
          width: '100%',
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <ChartWindow />
        <View
          style={{
            position: 'absolute',
            top: 25,
            left: 180,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icons
            name="time-outline"
            style={{fontSize: 28, color: '#fff', fontWeight: 'bold'}}
          />
          <Text
            style={{
              fontSize: 24,
              marginHorizontal: 5,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            24.45
          </Text>
          <Text style={{color: '#D3D3D3'}}>Timing</Text>
        </View>
      </View>
      {/* Task View */}
      <View style={{backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: '#000',
              letterSpacing: 1,
              marginHorizontal: 30,
            }}>
            Task
          </Text>
          <Icons
            name="filter-outline"
            style={{marginHorizontal: 30, fontSize: 32, color: '#000'}}
          />
        </View>
        <Task
          atmnum={'ATM 1'}
          branchName={'AGS'}
          branchAdd={'SBI, RT Nagar, Bangalore'}
          status={'Done'}
        />
        <Task
          atmnum={'ATM 2'}
          branchName={'AGS'}
          branchAdd={'AXIS, RT Nagar, Bangalore'}
          status={'Pending'}
        />
        <Task
          atmnum={'ATM 3'}
          branchName={'AGS'}
          branchAdd={'ICICI, RT Nagar, Bangalore'}
          status={'Pending'}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
