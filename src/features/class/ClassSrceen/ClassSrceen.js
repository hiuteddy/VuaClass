import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import CourseCard from '../components/CourseCard';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const courses = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300',
    title: 'Lớp A300 Ielts tháng 10 - 2022',
    description:
      'Chắc hẳn không ít bạn đọc văn đang băn khoăn Luận văn tốt nghiệp...',
    teacher: 'Cô Thảo',
    status: 'Đang học',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    title: 'Lớp B200 Toán tháng 11 - 2022',
    description: 'Chương trình học nâng cao dành cho học sinh lớp 12...',
    teacher: 'Thầy Tuấn',
    status: 'Đã hoàn thành',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300',
    title: 'Lớp B200 Toán tháng 11 - 2022',
    description: 'Chương trình học nâng cao dành cho học sinh lớp 12...',
    teacher: 'Thầy Tuấn',
    status: 'Đã hoàn thành',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300',
    title: 'Lớp B200 Toán tháng 11 - 2022',
    description: 'Chương trình học nâng cao dành cho học sinh lớp 12...',
    teacher: 'Thầy Tuấn',
    status: 'Đã hoàn thành',
  },
];

const ClassScreen = () => {
  const navigation = useNavigation();

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
        <Text style={styles.breadcrumbText}>Lớp học của tôi</Text>
      </View>
      <View style={styles.separator} />

      {courses.map(course => (
        <CourseCard
          key={course.id}
          image={course.image}
          title={course.title}
          description={course.description}
          teacher={course.teacher}
          status={course.status}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    flex: 1,
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 15,
  },
});

export default ClassScreen;
