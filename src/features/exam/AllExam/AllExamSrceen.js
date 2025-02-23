import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ExamCard from '../components/ExamCard';
import SearchWithDropdown from '../../../components/Search/SearchWithDropdown';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

const AllExamScreen = ({navigation, route}) => {
  const breadcrumbs = [
    {
      name: 'Trang chủ', // Tên lớp lấy từ route.params
      icon: 'home',
      onPress: () => navigation.navigate('Main'),
    },
    {
      name: 'Đề thi', // Tên lớp lấy từ route.params
    },
  ];
  // Dữ liệu danh sách đề thi
  const examData = [
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

  const categories = ['Tất cả', 'Miễn phí', 'Trả phí', 'Nhập mã'];

  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [filteredExams, setFilteredExams] = useState(examData);

  // Xử lý tìm kiếm
  const handleSearch = text => {
    setSearchText(text);
    filterExams(text, selectedCategory);
  };

  // Xử lý chọn danh mục
  const handleCategorySelect = category => {
    setSelectedCategory(category);
    filterExams(searchText, category);
  };

  // Lọc danh sách theo tìm kiếm và danh mục
  const filterExams = (text, category) => {
    let filtered = examData.filter(exam =>
      exam.title.toLowerCase().includes(text.toLowerCase()),
    );

    if (category !== 'Tất cả') {
      filtered = filtered.filter(exam => exam.category === category);
    }

    setFilteredExams(filtered);
  };

  return (
    <View style={styles.container}>
      <Breadcrumb
        navigation={navigation}
        route={route}
        breadcrumbs={breadcrumbs}
      />
      
      <SearchWithDropdown
        categories={categories}
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
      />

      <ExamCard
        navigation={navigation}
        title={'Đề thi Ielts nổi bật'}
        data={examData}
        horizontal={true}
        navigateToAll={'AllExamSrceen'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},

});

export default AllExamScreen;
