import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import BottomNav from './BottomNav';
import CreateIssue from './screens/CreateIssue';
import CompletedCheckList from './screens/CompletedCheckList';
import PendingCheckList from './screens/PendingCheckList';
import RepairRequest from './screens/RepairRequest';
import Splash from './screens/Splash';
import Thanks from './screens/Thanks';
import CreateTicketScreen from './screens/CreateTicketScreen';
import CameraScreen from './screens/CameraScreen';
import ClientSelectionScreen from './screens/ClientSelectionScreen';
import BankSelectionScreen from './screens/BankSelectionScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';

const Stack = createNativeStackNavigator();
const AppNavigtor = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="ClientSelectionScreen"
          component={ClientSelectionScreen}
        />
        <Stack.Screen
          name="BankSelectionScreen"
          component={BankSelectionScreen}
        />
        <Stack.Screen name="BtmNav" component={BottomNav} />
        <Stack.Screen name="PendingCheckList" component={PendingCheckList} />
        <Stack.Screen name="RepairRequest" component={RepairRequest} />
        <Stack.Screen
          name="CompletedCheckList"
          component={CompletedCheckList}
        />
        <Stack.Screen name="Thanks" component={Thanks} />
        <Stack.Screen name="CreateIssue" component={CreateIssue} />
        <Stack.Screen
          name="CreateTicketScreen"
          component={CreateTicketScreen}
        />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigtor;
