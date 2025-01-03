import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import ExamDetailScreen from '../features/exam/ExamDetailScreen/ExamDetailScreen';
import Header from '../components/Header/Header';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <Header
            onSearchPress={() => console.log('Search')}
            onAvatarPress={() => console.log('Avatar')}
          />
        ),
      }}>
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
