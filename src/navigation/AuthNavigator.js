import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from '../features/auth/Login/LoginScreen';
// import RegisterScreen from '../features/auth/Registered/Registered';
// import ForgotPasswordScreen from '../features/auth/ForgotPassword/ForgotPassword';
// import ChangePassword from '../features/auth/ChangePassword/ChangePassword';
import Header from '../components/Header/Header';  // Import Header
import LoginScreen from '../features/auth/Login/LoginScreen';
import Registered from '../features/auth/Registered/Registered';
import ForgotPassword from '../features/auth/ForgotPassword/ForgotPassword';
import ChangePassword from '../features/auth/ChangePassword/ChangePassword';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header onSearchPress={() => console.log('Search')} onAvatarPress={() => console.log('Avatar')} />,

      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Registered} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />

    </Stack.Navigator>
  );
};

export default AuthNavigator;
