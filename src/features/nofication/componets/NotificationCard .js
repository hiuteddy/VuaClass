import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const NotificationCard = ({ title, description, time, isRead, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: isRead ? '#f5f5f5' : '#ffffff' }]}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Image
          source={require('../../../assets/icons/icon_Award.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <Text
      
      style={styles.description} numberOfLines={2} ellipsizeMode="...">
        {description}
      </Text>
      <Text style={styles.time}>{time}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minHeight: 126, // Đảm bảo chiều cao đủ chứa nội dung
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
    flexShrink: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    flexWrap: 'wrap',
    height:38,
    color: '#666',
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationCard;
