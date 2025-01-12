import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const LessonDetailScreen = () => {
  const navigation = useNavigation();

  // Danh sách bài học ban đầu
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: '100 từ vựng tiếng Anh cơ bản',
      image: 'https://via.placeholder.com/100',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Ngữ pháp tiếng Anh nâng cao',
      image: 'https://via.placeholder.com/100',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Luyện phát âm chuẩn',
      image: 'https://via.placeholder.com/100',
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Luyện phát âm chuẩn',
      image: 'https://via.placeholder.com/100',
      isCompleted: false,
    },
  ]);

  // Xử lý đánh dấu tất cả bài học đã hoàn thành
  const handleMarkAllComplete = () => {
    const updatedLessons = lessons.map(lesson => ({
      ...lesson,
      isCompleted: true,
    }));
    setLessons(updatedLessons); // Cập nhật danh sách bài học
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.breadcrumb}>
        {/* Icon Home */}

        <TouchableOpacity
          style={styles.breadcrumbItem}
          onPress={navigation.goBack}>
          <MaterialCommunityIcons
            name="home"
            size={18}
            color="#3D3D3D"
            style={styles.icon}
          />
          <Text style={styles.breadcrumbText}>Trang chủ</Text>
        </TouchableOpacity>

        {/* Chevron + Thông báo */}
        <MaterialCommunityIcons
          name="chevron-right"
          size={18}
          color="#3D3D3D"
        />
        <Text style={styles.breadcrumbText}>Lớp ....</Text>

        {/* Chevron + Thông báo hệ thống */}
        <MaterialCommunityIcons
          name="chevron-right"
          size={18}
          color="#3D3D3D"
        />
        <Text style={styles.breadcrumbText}>Bài giảng</Text>
      </View>
      <View style={styles.separator} />
      <Text style={styles.headerTitle}>Bài giảng</Text>
      <View style={styles.separator} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.lessonTitle}>Game từ vựng</Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <Image
          source={{uri: 'https://via.placeholder.com/300'}}
          style={styles.videoImage}
        />
        <MaterialCommunityIcons
          name="play-circle"
          size={60}
          color="#fff"
          style={styles.playIcon}
        />
      </View>

      {/* Mô tả bài học */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet.
        </Text>
        <Text style={styles.deadline}>Deadline: 10:00 - 20/12/2023</Text>
      </View>

      {/* Nút đánh dấu hoàn thành */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.markCompleteButton}
          onPress={handleMarkAllComplete}>
          <Text style={styles.buttonText}>Đánh dấu hoàn thành</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách bài học */}
      {lessons.map(lesson => (
        <TouchableOpacity
          key={lesson.id}
          onPress={() => navigation.navigate('VocabularyScreen')}
          style={styles.completedItem}>
          <Image source={{uri: lesson.image}} style={styles.completedImage} />
          <Text style={styles.completedText}>{lesson.title}</Text>
          {lesson.isCompleted && (
            <MaterialCommunityIcons
              name="check-circle"
              size={24} // Kích thước icon
              color="#28A745" // Màu xanh hoàn thành
              style={styles.completedIcon}
            />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
  },
  breadcrumb: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  breadcrumbItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  breadcrumbText: {
    fontSize: 14,
    color: '#3D3D3D',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 15,
  },
  lessonTitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  videoContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 16,
  },
  videoImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  playIcon: {
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
  },
  descriptionContainer: {
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  deadline: {
    fontSize: 14,
    color: '#FF3B30',
    marginTop: 8,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    marginBottom: 16,
    width: 192,
    height: 40,
  },
  markCompleteButton: {
    height:40,
    width:192,
    padding: 10,
    backgroundColor: '#034567',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  completedItem: {
    flexDirection: 'row',
    padding: 15,
    height: 95,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // Đổ bóng cho item
    marginBottom: 10,
  },
  completedImage: {
    width: 111,
    height: 63,
    borderRadius: 8, // Bo góc hình ảnh
    marginRight: 12, // Khoảng cách giữa hình và tiêu đề
  },
  completedText: {
    width: 200,
    height: 60,
    fontWeight:'500',
    fontSize: 16,
    color: '#333',
    lineHeight:18
  },
  completedIcon: {
    marginTop: 25,
    marginLeft: 5,
    // Khoảng cách giữa tiêu đề và icon
  },
});

export default LessonDetailScreen;
