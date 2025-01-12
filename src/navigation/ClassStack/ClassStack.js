// ClassStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ClassSrceen from '../../features/class/ClassSrceen/ClassSrceen';
import ClassDetailScreen from '../../features/class/ClassDetailScreen/ClassDetailScreen';
import ExerciseDetailScreen from '../../features/class/ExerciseDetailScreen/ExerciseDetailScreen';
import LessonDetailScreen from '../../features/class/LessonDetailScreen/LessonDetailScreen';
import VocabularyScreen from '../../features/class/VocabularyScreen/VocabularyScreen';
import ListDocumentScreen from '../../features/class/ListDocumentScreen/ListDocumentScreen';

const Stack = createStackNavigator();

const ClassStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Không hiển thị header ở đây
      }}>
      <Stack.Screen name="ClassSrceen" component={ClassSrceen} />
      <Stack.Screen name="ClassDetailScreen" component={ClassDetailScreen} />
      <Stack.Screen name="ExerciseDetailScreen" component={ExerciseDetailScreen} />
      <Stack.Screen name="LessonDetailScreen" component={LessonDetailScreen} />
      <Stack.Screen name="VocabularyScreen" component={VocabularyScreen} />
      <Stack.Screen name="ListDocumentScreen" component={ListDocumentScreen} />

    </Stack.Navigator>
  );
};

export default ClassStack;
