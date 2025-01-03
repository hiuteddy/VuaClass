import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const NotificationDetailScreen = ({route}) => {
  const {title, description, time, image} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/icons/icon_Award.png')}
          style={styles.icon}
        />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
      </View>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image
        source={require('../../../assets/images/image_NofiDetail.png')}
        style={styles.image}
      />
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16, // Padding toàn màn hình
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', // Căn giữa theo chiều dọc
    marginBottom: 8, // Khoảng cách giữa tiêu đề và phần thời gian
  },
  icon: {
    marginRight: 5, // Khoảng cách giữa icon và tiêu đề
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1, // Để title chiếm hết không gian còn lại
  },
  time: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8, // Khoảng cách giữa thời gian và phần mô tả đầu tiên
  },
  image: {
    width: '100%',
    height: 200, // Kích thước hình ảnh chính
    borderRadius: 8,
    marginBottom: 10, // Khoảng cách giữa hình ảnh và nội dung bên dưới
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22, // Tăng line-height để dễ đọc hơn
  },
});

export default NotificationDetailScreen;
