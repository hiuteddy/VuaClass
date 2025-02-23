import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ClassDescription from '../components/ClassDescription';
import MembersList from '../components/MembersList';
import UnitList from '../components/UnitList';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

const ClassDetailScreen = ({navigation, route}) => {
  const [activeTab, setActiveTab] = useState('Tiến trình');

  const classTitle = route.params?.title || 'loading...';
  const breadcrumbs = [
    {
      icon: 'home',
    },
    {
      name:'...', // Tên lớp lấy từ route.params
    },
    {
      name: classTitle, // Tên lớp lấy từ route.params
    },
  ];

  // Dữ liệu lớp học
  const classData = {
    startDate: '01/10/2022',
    endDate: '30/11/2022',
    stats: {
      students: 15,
      exercises: 15,
      lectures: 15,
      materials: 15,
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: require('../../../assets/images/image_ClassDescrip.png'),
  };

  const units = [
    {
      id: 1,
      title: 'Unit 1',
      badge: 2,
      lessonCount: 5,
      exerciseCount: 3,
      documentCount: 2,
    },
    {
      id: 2,
      title: 'Unit 2',
      badge: null,
      lessonCount: 4,
      exerciseCount: 5,
      documentCount: 3,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Tiến trình':
        return <UnitList units={units} navigation={navigation} />;
      case 'Mô tả lớp học':
        return <ClassDescription data={classData} />;
      case 'Thành viên':
        return <MembersList />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Breadcrumb
        navigation={navigation}
        route={route}
        breadcrumbs={breadcrumbs}
      />

      <Text style={styles.title}>Lớp A300 Ielts tháng 10 - 2022</Text>

      {/* Tab Header */}
      <View style={styles.tabContainer}>
        {['Tiến trình', 'Mô tả lớp học', 'Thành viên'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.separator} />

      {/* Nội dung */}
      <FlatList
        data={[renderTabContent()]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <View>{item}</View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 122,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  activeTabButton: {
    backgroundColor: '#034567',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 15,
  },
});

export default ClassDetailScreen;
