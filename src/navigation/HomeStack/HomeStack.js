import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../features/home/HomeSrceen/HomeSrceen';
import ExamDetailScreen from '../../features/exam/ExamDetailScreen/ExamDetailScreen';
import AllDocumentScreen from '../../features/document/AllDocumentSrceen/AllDocumentSrceen';
import DocumentDetailSrceen from '../../features/document/DocumentDetailSrceen/DocumentDetailSrceen';
import AccountScreen from '../../features/account/AccountScreen/AccountScreen';
import AllExamSrceen from '../../features/exam/AllExam/AllExamSrceen';
import SettingsStackNavigator from '../SettingStack/SettingStack';
import HeaderContainer from '../../components/Header/HeaderContainer';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderContainer currentTab="Home" />,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ExamDetailScreen" component={ExamDetailScreen} />
      <Stack.Screen name="AllDocumentScreen" component={AllDocumentScreen} />
      <Stack.Screen name="DocumentDetailSrceen"component={DocumentDetailSrceen}/>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="AllExamSrceen" component={AllExamSrceen} />
      <Stack.Screen name="Profile" component={SettingsStackNavigator} />
    </Stack.Navigator>
  );
};

export default HomeStack;
