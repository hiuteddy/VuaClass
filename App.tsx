// src/App.js
import React from 'react';
import AppNavigator from '../AppVuaClass/src/navigation/MainNavigator'; // Điều hướng chính
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
