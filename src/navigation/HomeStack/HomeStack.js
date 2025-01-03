// HomeStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../features/home/HomeSrceen/HomeSrceen';
import ExamDetailScreen from '../../features/exam/ExamDetailScreen/ExamDetailScreen';
import Header from '../../components/Header/Header';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Không hiển thị header ở đây
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ExamDetailScreen" component={ExamDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
