// SettingsStackNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../../features/account/AccountScreen/AccountScreen';
import DeltailsAccount from '../../features/account/DeltailsAccount';

const Stack = createStackNavigator();

const SettingsStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, }}>
    <Stack.Screen name="Settings" component={AccountScreen} />
    <Stack.Screen name="SettingsDeltails" component={DeltailsAccount} />
  </Stack.Navigator>
);

export default SettingsStackNavigator;
