// src/screens/NotificationsScreen.js
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import NotificationCard from '../componets/NotificationCard ';

const NoficationSrceen = ({navigation}) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Thông báo hệ thống',
      description: 'Chắc hẳn không ít bạn đọc văn đang băn khoăn nnnnn nnnnnnnodsadsad dsad sadsadsa ffffffffff dsa fffffff jjjjjjjjjjjjf',
      time: '08:00 - 20/01/2024',
      isRead: false,
    },
    {
      id: 2,
      title: 'Thông báo hệ thống',
      description: 'Chắc hẳn không ít bạn đọc văn đang băn khoăn...',
      time: '08:00 - 20/01/2024',
      isRead: true,
    },
    {
      id: 3,
      title: 'Thông báo hệ thống',
      description: 'Chắc hẳn không ít bạn đọc văn đang băn khoăn...',
      time: '08:00 - 20/01/2024',
      isRead: false,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({...notification, isRead: true})),
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={markAllAsRead}>
        <Text style={styles.text}>Đánh dấu đã đọc tất cả</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.content}>
        {notifications.map(notification => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            description={notification.description}
            time={notification.time}
            isRead={notification.isRead}
            onPress={() =>
              navigation.navigate("NoficationDetailScreen", { ...notification })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  text: {
    color: '#034567',
    fontfamily: 'Roboto-Medium',
    fontsize: 14,
    fontWeight: 700,
    lineHeight: 17.5,
    textAlign: 'right',
    marginTop: 15,
    marginRight: 15,
  },
  content: {
    padding: 15,
  },
});

export default NoficationSrceen;
