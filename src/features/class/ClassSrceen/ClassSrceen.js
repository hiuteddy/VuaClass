import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import CourseCard from '../components/CourseCard';
import {useNavigation} from '@react-navigation/native';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

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

const ClassScreen = route => {
  const navigation = useNavigation();
  const breadcrumbs = [
    {
      name: 'Trang chủ', // Tên lớp lấy từ route.params
      icon: 'home',
    },
    {
      name: 'Lớp học của tôi' // Tên lớp lấy từ route.params
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Breadcrumb
        navigation={navigation}
        route={route}
        breadcrumbs={breadcrumbs}
      />

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
    padding: 16,
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
});

export default ClassScreen;
