import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'; 
import HomeStack from './HomeStack/HomeStack';
import ClassStack from './ClassStack/ClassStack';
import NoficationStack from './NoficationStack/NoficationStack';
import MenuStack from './MenuStack/MenuStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let imageSource;
          // Xử lý các icon tương ứng với từng tab
          if (route.name === 'Home') {
            imageSource = require('../assets/icons/icon_Home.png');
          } else if (route.name === 'Class') {
            imageSource = require('../assets/icons/icon_Class.png');
          } else if (route.name === 'Notification') {
            imageSource = require('../assets/icons/icon_Notification.png');
          } else if (route.name === 'Menu') {
            imageSource = require('../assets/icons/icon_Menu.png');
          }

          return (
            <Image 
              source={imageSource} 
              style={{ width: size, height: size, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: '#034567',
        tabBarInactiveTintColor: '#777777',
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Class" component={ClassStack} />
      <Tab.Screen name="Notification" component={NoficationStack} />
      <Tab.Screen name="Menu" component={MenuStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;