import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const exercises = [
  {
    id: '1',
    type: 'bài tập phát âm',
    image: 'https://via.placeholder.com/300x150',
    title: 'Bộ đề thi Ielts General tháng 10 năm 2022',
    date: '10h20 - 12/10/2022',
    status: 'Đang làm',
    deadline: '10:00 - 20/12/2023',
    counts: [40, 40, 40, 40],
  },
  {
    id: '2',
    type: '',
    image: 'https://via.placeholder.com/300x150',
    title: 'Bộ đề thi Ielts Writing tháng 11 năm 2022',
    date: '09h00 - 15/11/2022',
    status: 'Đã hoàn thành',
    deadline: '10:00 - 25/12/2023',
    counts: [30, 40, 30, 40],
  },
];

const ExerciseListScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View>
      <View>
        {item.type ? <Text style={styles.header}>{item.type}</Text> : null}
      </View>
      <View style={styles.card}>
        <View>
          <Image source={{uri: item.image}} style={styles.image} />

          <View
            style={[
              styles.statusBadge,
              item.status === 'Đang làm'
                ? styles.statusInProgress
                : styles.statusCompleted,
            ]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>

        <View style={styles.info}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.line} />

          <View style={styles.countContainer}>
            <View style={styles.countItem}>
              <Text style={styles.icon}>🎧</Text>
              <Text style={styles.countText}>{item.counts[0]} câu</Text>
            </View>
            <View style={styles.countItem}>
              <Text style={styles.icon}>📖</Text>
              <Text style={styles.countText}>{item.counts[1]} câu</Text>
            </View>
            <View style={styles.countItem}>
              <Text style={styles.icon}>✏️</Text>
              <Text style={styles.countText}>{item.counts[2]} câu</Text>
            </View>
            <View style={styles.countItem}>
              <Text style={styles.icon}>🎤</Text>
              <Text style={styles.countText}>{item.counts[3]} câu</Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.footer}>
            <Text style={styles.deadline}>Deadline: {item.deadline}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Xem chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.breadcrumb}>
        <TouchableOpacity
          style={styles.breadcrumbItem}
          onPress={navigation.goBack}>
          <MaterialCommunityIcons
            name="home"
            size={18}
            color="#3D3D3D"
            style={styles.breadcrumbIcon}
          />
          <Text style={styles.breadcrumbText}>Trang chủ</Text>
        </TouchableOpacity>
        <MaterialCommunityIcons
          name="chevron-right"
          size={18}
          color="#3D3D3D"
        />
        <Text style={styles.breadcrumbText}>Lớp học ............</Text>
        <MaterialCommunityIcons
          name="chevron-right"
          size={18}
          color="#3D3D3D"
        />
        <Text style={styles.breadcrumbText}>Tài liệu</Text>
      </View>

      <View style={styles.line} />
      <Text style={styles.header}>Bài tập</Text>
      <View style={styles.line} />
      <FlatList
        data={exercises}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ExerciseListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  breadcrumbIcon: {
    marginRight: 5,
  },
  breadcrumbText: {
    fontSize: 14,
    color: '#3D3D3D',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 15,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 223,
  },
  statusBadge: {
    position: 'absolute',
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  statusInProgress: {
    backgroundColor: '#FFB800',
  },
  statusCompleted: {
    backgroundColor: '#4CAF50',
  },
  statusText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  info: {
    padding: 15,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  countItem: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    marginBottom: 5,
  },
  countText: {
    fontSize: 14,
    color: '#666',
  },
  line: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  deadline: {
    color: '#F44336',
    flexShrink: 1, // Đảm bảo text không tràn ra ngoài
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 26,
    width: 96,
    backgroundColor: '#034567',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
