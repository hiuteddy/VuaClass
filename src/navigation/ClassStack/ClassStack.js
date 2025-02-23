import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ClassSrceen from '../../features/class/ClassSrceen/ClassSrceen';
import ClassDetailScreen from '../../features/class/ClassDetailScreen/ClassDetailScreen';
import ExerciseDetailScreen from '../../features/class/ExerciseDetailScreen/ExerciseDetailScreen';
import LessonDetailScreen from '../../features/class/LessonDetailScreen/LessonDetailScreen';
import VocabularyScreen from '../../features/class/VocabularyScreen/VocabularyScreen';
import ListDocumentScreen from '../../features/class/ListDocumentScreen/ListDocumentScreen';
import SettingsStackNavigator from '../SettingStack/SettingStack';
import HeaderContainer from '../../components/Header/HeaderContainer';
const Stack = createStackNavigator();

const ClassStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => <HeaderContainer currentTab="Class" />,}}>
      <Stack.Screen name="ClassSrceen" component={ClassSrceen} />
      <Stack.Screen name="ClassDetailScreen" component={ClassDetailScreen} />
      <Stack.Screen name="ExerciseDetailScreen"component={ExerciseDetailScreen}/>
      <Stack.Screen name="LessonDetailScreen" component={LessonDetailScreen} />
      <Stack.Screen name="VocabularyScreen" component={VocabularyScreen} />
      <Stack.Screen name="ListDocumentScreen" component={ListDocumentScreen} />
      <Stack.Screen name="Profile" component={SettingsStackNavigator} />
    </Stack.Navigator>
  );
};

export default ClassStack;
