// add dependences of vector icon
// how add icon in bottom stack navigation

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Notification from './screens/Notification';
import Status from './screens/Status';

const BtmTab = createBottomTabNavigator();

const homeScreen = 'Home';
const profileScreen = 'Profile';
const notificationScreen = 'Notifications';
const statusScreen = 'Status/History';

const BottomNav = () => {
  return (
    <BtmTab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn == homeScreen) {
            iconName = 'home-sharp';
          } else if (rn == profileScreen) {
            iconName = 'person-sharp';
          } else if (rn == notificationScreen) {
            iconName = 'notifications-sharp';
          } else if (rn == statusScreen) {
            iconName = 'grid-sharp';
          }
          return <Icons name={iconName} color={color} size={size} />;
        },
        headerShown: false,
        tabBarStyle: {
          height: 55,
          paddingTop: 5,
          backgroundColor: 'black',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
        },
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: '#C0C0C0',
      })}>
      <BtmTab.Screen name={homeScreen} component={Home} />
      <BtmTab.Screen name={profileScreen} component={Profile} />
      <BtmTab.Screen name={notificationScreen} component={Notification} />
      <BtmTab.Screen name={statusScreen} component={Status} />
    </BtmTab.Navigator>
  );
};

export default BottomNav;
