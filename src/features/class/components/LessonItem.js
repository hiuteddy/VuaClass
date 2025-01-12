import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LessonItem = ({ title, image, isCompleted, onMarkComplete }) => {
  return (
    <View style={styles.lessonItem}>
      {/* Hình ảnh bài học */}
      <Image source={{ uri: image }} style={styles.lessonImage} />
      
      {/* Thông tin bài học */}
      <View style={styles.lessonInfo}>
        <Text style={styles.lessonTitle}>{title}</Text>
        {isCompleted ? (
          <MaterialCommunityIcons name="check-circle" size={20} color="#28A745" />
        ) : (
          <TouchableOpacity onPress={onMarkComplete}>
            <Text style={styles.markCompleteText}>Đánh dấu hoàn thành</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  lessonImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  markCompleteText: {
    color: '#007BFF',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

export default LessonItem;
