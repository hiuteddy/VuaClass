// src/App.js
import React from 'react';
import AppNavigator from './src/navigation/MainNavigator'; // Điều hướng chính
import {NavigationContainer} from '@react-navigation/native';
import {TabProvider} from './src/navigation/TabContext';
const App = () => {
  return (
    <TabProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TabProvider>
  );
};

export default App;
