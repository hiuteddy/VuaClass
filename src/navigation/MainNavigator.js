import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import ExamDetailScreen from '../features/exam/ExamDetailScreen/ExamDetailScreen';
import Header from '../components/Header/Header';
import {useNavigation} from '@react-navigation/native';
import AccountScreen from '../features/account/AccountScreen/AccountScreen';

const Stack = createStackNavigator();

const HeaderContainer = () => {
  const navigation = useNavigation();

  return (
    <Header
      onSearchPress={() => console.log('Search')}
      onAvatarPress={() => {
        const item = { title: 'Tài khoản'}; // Example item
        navigation.replace('Profile', { item, routeName: 'Main' });
      }}
    />
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderContainer />,
      }}>
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Profile" component={AccountScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;