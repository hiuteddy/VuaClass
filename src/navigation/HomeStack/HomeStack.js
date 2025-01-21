// HomeStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../features/home/HomeSrceen/HomeSrceen';
import ExamDetailScreen from '../../features/exam/ExamDetailScreen/ExamDetailScreen';
import AllDocumentScreen from '../../features/document/AllDocumentSrceen/AllDocumentSrceen';
import DocumentDetailSrceen from '../../features/document/DocumentDetailSrceen/DocumentDetailSrceen';
import AccountScreen from '../../features/account/AccountScreen/AccountScreen';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Không hiển thị header ở đây
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ExamDetailScreen" component={ExamDetailScreen} />
      <Stack.Screen name="AllDocumentScreen" component={AllDocumentScreen} />
      <Stack.Screen name="DocumentDetailSrceen" component={DocumentDetailSrceen} />
      <Stack.Screen name='AccountScreen' component={AccountScreen}/>

    </Stack.Navigator>
  );
};

export default HomeStack;
