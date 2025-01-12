import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const NotificationCard = ({title, description, time, isRead, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: isRead ? '#ffffff' : '#F3FBFF'}]}
      onPress={onPress}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/icons/icon_Award.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode="...">
        {description}
      </Text>
      <Text style={styles.time}>{time}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16, // Khoảng cách bên trong
    marginBottom: 8, // Khoảng cách bên dưới card
    borderRadius: 8, // Bo góc toàn bộ card
    borderWidth: 1, // Độ dày viền
    borderColor: '#e0e0e0', // Màu viền
    height: 126, // Chiều cao của card
    shadowColor: '#000', // Màu bóng đổ
    shadowOffset: { width: 0, height: 3 }, // Độ lệch bóng
    shadowOpacity: 0.2, // Độ mờ của bóng
    shadowRadius: 5, // Bán kính mờ của bóng
    elevation: 5, // Độ cao bóng (chỉ dùng cho Android)
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  description: {
    fontSize: 14,
    flexWrap: 'wrap',
    height: 38,
    color: '#666',
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationCard;
