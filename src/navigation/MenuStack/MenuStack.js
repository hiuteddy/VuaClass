// Menu.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MenuSrceen from '../../features/menu/MenuSrceen/MenuSrceen';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header/Header';
import SettingsStackNavigator from '../SettingStack/SettingStack';
import HeaderContainer from '../../components/Header/HeaderContainer';
const Stack = createStackNavigator();




const MenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => 
        
        <HeaderContainer currentTab="Menu" />, // Truyền tên tab hiện tại
      }}>
      <Stack.Screen name="Menuu" component={MenuSrceen} />
      <Stack.Screen name="Profile" component={SettingsStackNavigator} />
    </Stack.Navigator>
  );
};

export default MenuStack;
