// ClassStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NoficationSrceen from '../../features/nofication/NoficationSrceen/NoficationSrceen';
import NoficationDetailScreen from '../../features/nofication/NoficationDetailScreen/NoficationDetailScreen';
import SettingsStackNavigator from '../SettingStack/SettingStack';
const Stack = createStackNavigator();
import HeaderContainer from '../../components/Header/HeaderContainer';

const NoficationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => <HeaderContainer currentTab="Notification"/>, }}>
      <Stack.Screen name="NoficationSrceen" component={NoficationSrceen} />
      <Stack.Screen name="NoficationDetailScreen" component={NoficationDetailScreen}/>
      <Stack.Screen name="Profile" component={SettingsStackNavigator} />
    </Stack.Navigator>
  );
};

export default NoficationStack;
