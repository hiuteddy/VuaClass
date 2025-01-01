import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';  // Import Image từ react-native
// import ClassSrceen from '../features/class/srceens/ClassSrceen';
import Header from '../components/Header/Header';
import HomeSrceen from '../features/home/HomeSrceen/HomeSrceen';
import ClassSrceen from '../features/class/ClassSrceen/ClassSrceen';
import NoficationSrceen from '../features/nofication/NoficationSrceen/NoficationSrceen';
import MenuSrceen from '../features/menu/MenuSrceen/MenuSrceen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 60 },
        header: () => <Header onSearchPress={() => console.log('Search')} onAvatarPress={() => console.log('Avatar')} />,
        tabBarIcon: ({ color, size }) => {
          let imageSource;
          
          // Chọn ảnh tùy thuộc vào route
          if (route.name === 'Trang chủ') {
            imageSource = require('../assets/icons/icon_Home.png');  // Đường dẫn ảnh của bạn
          } else if (route.name === 'Lớp học') {
            imageSource = require('../assets/icons/icon_Class.png');  // Đường dẫn ảnh của bạn
          } else if (route.name === 'Thông báo') {
            imageSource = require('../assets/icons/icon_Notification.png');  // Đường dẫn ảnh của bạn
          } else if (route.name === 'Menu') {
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
      <Tab.Screen name="Trang chủ" component={HomeSrceen} />
      <Tab.Screen name="Lớp học" component={ClassSrceen} />
      <Tab.Screen name="Thông báo" component={NoficationSrceen} />
      <Tab.Screen name="Menu" component={MenuSrceen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
