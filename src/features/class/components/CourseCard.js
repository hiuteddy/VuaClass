import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CourseCard = ({ image, title, description, teacher, status, onPress }) => {
  const navigation = useNavigation(); // Lấy đối tượng navigation

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ClassDetailScreen', {
            title,
            description,
            teacher,
            image,
            status,
          })
        }
      >
        {/* Hình ảnh */}
        <Image source={{ uri: image }} style={styles.image} />

        {/* Nội dung thông tin */}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
          <View style={styles.separator}></View>
          {/* Thông tin giáo viên và trạng thái */}
          <View style={styles.footer}>
            <View style={styles.teacherInfo}>
              {/* Avatar giáo viên */}
              <Image
                source={require('../../../assets/images/image_NofiDetail.png')}
                style={styles.avatar}
              />
              <Text style={styles.teacherText}>Gv: {teacher}</Text>
            </View>

            {/* Trạng thái */}
            <Text style={styles.status}>{status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  teacherText: {
    fontSize: 14,
    color: '#666',
  },
  status: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default CourseCard;
