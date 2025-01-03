// ClassStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ClassSrceen from '../../features/class/ClassSrceen/ClassSrceen';

const Stack = createStackNavigator();

const ClassStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Không hiển thị header ở đây
      }}>
      <Stack.Screen name="ClassSrceen" component={ClassSrceen} />
    </Stack.Navigator>
  );
};

export default ClassStack;
