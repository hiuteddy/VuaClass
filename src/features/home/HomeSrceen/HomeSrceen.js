import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import FeaturedCard from '../components/FeaturedCard';
import Banner from '../components/Banner';
import Documents from '../components/Documents';
import MembershipCard from '../components/MembershipCard ';
import Menu from '../components/Menu';
import RegisterForm from '../components/RegisterForm ';

const menu = [
  {id: '1', icon: 'file-document-outline', text: 'Đề thi IELTS'},
  {id: '2', icon: 'clipboard-text-outline', text: 'Skill test'},
  {id: '3', icon: 'book-open-outline', text: 'Bài tập bổ trợ'},
  {id: '4', icon: 'book-open-outline', text: 'Bài tập bổ trợ'},
];

// Dữ liệu mẫu
const memberData = [
  {
    title: 'Gói 1',
    description:
      'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown',
    courses: ['Economy', 'Long Man', 'Mocktest Cambridge Listening'],
    documents: ['Economy', 'Long Man', 'Mocktest Cambridge Listening'],
    price: '500.000 vnđ / 1 tháng',
  },
  {
    title: 'Gói 2',
    description:
      'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown',
    courses: ['Economy', 'Long Man', 'Mocktest Cambridge Listening'],
    documents: ['Economy', 'Long Man', 'Mocktest Cambridge Listening'],
    price: '500.000 vnđ / 1 tháng',
  },
  {
    title: 'Gói 3',
    description:
      'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown',
    courses: ['Economy', 'Long Man', 'Mocktest Cambridge Listening'],
    documents: ['Economy', 'Long Man', 'Mocktest Cambridge Listening'],
    price: '500.000 vnđ / 1 tháng',
  },
];

const mockData = [
  {
    status: 'Đang làm',
    date: '10h20 - 12/10/2022',
    title: 'Đề IELTS Cambridge 17_2',
    tags: ['Yes/ No/ Notgiven', 'Traffic', '6.5 - 7.5'],
    stats: [
      {icon: '🎧', text: '40 câu'},
      {icon: '📖', text: '40 câu'},
      {icon: '🖊️', text: '40 câu'},
      {icon: '🎤', text: '40 câu'},
    ],
    isPaid: false,
  },
  {
    status: 'Hoàn thành',
    date: '14h00 - 15/10/2022',
    title: 'Đề IELTS Cambridge 18_1',
    tags: ['Multiple choice', 'Science', '7.0 - 8.0'],
    stats: [
      {icon: '🎧', text: '50 câu'},
      {icon: '📖', text: '50 câu'},
      {icon: '🖊️', text: '50 câu'},
      {icon: '🎤', text: '50 câu'},
    ],
    isPaid: false,
  },
  {
    status: 'Đang làm',
    date: '10h20 - 12/10/2022',
    title: 'Đề IELTS Cambridge 17_2',
    tags: ['Yes/ No/ Notgiven', 'Traffic', '6.5 - 7.5'],
    stats: [
      {icon: '🎧', text: '40 câu'},
      {icon: '📖', text: '40 câu'},
      {icon: '🖊️', text: '40 câu'},
      {icon: '🎤', text: '40 câu'},
    ],
    isPaid: false,
  },
];
const mockData1 = [
  {
    status: 'Đang làm',
    date: '10h20 - 12/10/2022',
    title: 'Đề IELTS Cambridge 17_2',
    tags: ['Yes/ No/ Notgiven', 'Traffic', '6.5 - 7.5'],
    stats: [
      {icon: '🎧', text: '40 câu'},
      {icon: '📖', text: '40 câu'},
      {icon: '🖊️', text: '40 câu'},
      {icon: '🎤', text: '40 câu'},
    ],
    isPaid: true,
  },
  {
    status: 'Hoàn thành',
    date: '14h00 - 15/10/2022',
    title: 'Đề IELTS Cambridge 18_1',
    tags: ['Multiple choice', 'Science', '7.0 - 8.0'],
    stats: [
      {icon: '🎧', text: '50 câu'},
      {icon: '📖', text: '50 câu'},
      {icon: '🖊️', text: '50 câu'},
      {icon: '🎤', text: '50 câu'},
    ],
    isPaid: true,
  },
  {
    status: 'Đang làm',
    date: '10h20 - 12/10/2022',
    title: 'Đề IELTS Cambridge 17_2',
    tags: ['Yes/ No/ Notgiven', 'Traffic', '6.5 - 7.5'],
    stats: [
      {icon: '🎧', text: '40 câu'},
      {icon: '📖', text: '40 câu'},
      {icon: '🖊️', text: '40 câu'},
      {icon: '🎤', text: '40 câu'},
    ],
    isPaid: true,
  },
];
const documentsData = [
  {
    titledoc: 'Tài liệu luyện thi Ielts full 2022 ',
    date: '10h20 - 12/10/2022',
    description:
      'Chắc hẳn không ít bạn đọc vẫn đang băn khoăn Luận văn tốt nghiệp tiếng Anh là gì? Và những bước làm một bài luận văn hiệu quả...',
  },
  {
    titledoc: 'Tài liệu Ielts band 0 - 8.0 cần thiết nhất',
    date: '15h00 - 20/10/2022',
    description:
      'Bạn muốn đạt điểm số cao trong kỳ thi Ielts? Đừng bỏ qua tài liệu này!',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Banner />
      <Menu data={menu} />

      {/* In ra dữ liệu để kiểm tra */}

      <FeaturedCard
        navigation={navigation}
        title={'Đề thi Ielts nổi bật'}
        data={mockData} // Truyền dữ liệu đúng
        horizontal={true}
      />
      <FeaturedCard
        navigation={navigation}
        title={'Đề thi Ielts nổi bật'}
        data={mockData1} // Truyền dữ liệu đúng
        horizontal={true}
      />
      <Documents
        title={'Tài liệu nổi bật'}
        data={documentsData} // Truyền dữ liệu đúng
        horizontal={true}
        showIcons={true} // Không hiển thị icon
      />
      <Documents
        title={'Tài liệu nổi bật'}
        data={documentsData} // Truyền dữ liệu đúng
        horizontal={true}
        showIcons={false} // Không hiển thị icon
      />
      <MembershipCard data={memberData} titleHeader={'goi membership'} />
      <RegisterForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
