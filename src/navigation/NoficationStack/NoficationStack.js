// ClassStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NoficationSrceen from '../../features/nofication/NoficationSrceen/NoficationSrceen';
import NoficationDetailScreen from '../../features/nofication/NoficationDetailScreen/NoficationDetailScreen';

const Stack = createStackNavigator();

const NoficationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Không hiển thị header ở đây
      }}>
      <Stack.Screen
        name="NoficationSrceen"
        component={NoficationSrceen}
      />
       <Stack.Screen
        name="NoficationDetailScreen"
        component={NoficationDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default NoficationStack;
