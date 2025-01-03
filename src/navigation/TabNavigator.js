import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';  // Import Image từ react-native
// import ClassSrceen from '../features/class/srceens/ClassSrceen';
import Header from '../components/Header/Header';
import HomeStack from './HomeStack/HomeStack';
import ClassStack from './ClassStack/ClassStack';
import NoficationStack from './NoficationStack/NoficationStack';
import MenuStack from './MenuStack/MenuStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Không hiển thị header ở đây
        tabBarIcon: ({ color, size }) => {
          let imageSource;
          
          // Chọn ảnh tùy thuộc vào route
          if (route.name === 'Trang chủ') {
            imageSource = require('../assets/icons/icon_Home.png');  // Đường dẫn ảnh của bạn
          } else if (route.name === 'Lớp học') {
            imageSource = require('../assets/icons/icon_Class.png');  // Đường dẫn ảnh của bạn
          } else if (route.name === 'Thông báo') {
            imageSource = require('../assets/icons/icon_Notification.png');  // Đường dẫn ảnh của bạn
          } else if (route.name === 'Menuu') {
            imageSource = require('../assets/icons/icon_Menu.png');  // Đường dẫn ảnh của bạn
          }

          return (
            <Image 
              source={imageSource} 
              style={{ width: size, height: size, tintColor: color }}  // Cấu hình kích thước và màu sắc
            />
          );
        },
        tabBarActiveTintColor: '#034567',  // Màu khi active
        tabBarInactiveTintColor: '#777777', // Màu khi inactive (chưa click)
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeStack} />
      <Tab.Screen name="Lớp học" component={ClassStack} />
      <Tab.Screen name="Thông báo" component={NoficationStack} />
      <Tab.Screen name="Menuu" component={MenuStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
