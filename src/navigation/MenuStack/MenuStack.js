// Menu.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuSrceen from '../../features/menu/MenuSrceen/MenuSrceen';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false, // Không hiển thị header ở đây
      }}
    >
      <Stack.Screen name="Menu" component={MenuSrceen}  />
    </Stack.Navigator>
  );
};

export default MenuStack;
