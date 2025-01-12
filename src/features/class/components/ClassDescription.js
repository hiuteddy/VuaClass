import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ClassDescription = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}

      {/* Image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/300x150' }} // Thay bằng link ảnh phù hợp
        style={styles.image}
      />

      {/* Date Info */}
      <Text style={styles.dateInfo}>
        Bắt đầu: 01/10/2022 - Kết thúc: 30/11/2022
      </Text>

      {/* Statistics */}
      <View style={styles.statistics}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Học sinh</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Bài tập</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Bài giảng</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Tài liệu</Text>
        </View>
      </View>

      <View style={styles.separator} />

      {/* Teacher Info */}
      <View style={styles.teacherInfo}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Thay bằng link ảnh giáo viên
          style={styles.teacherImage}
        />
        <View style={styles.teacherColum}>
          <Text style={styles.teacherName}>Gv: </Text>
          <Text style={styles.teacherName}>Alex Adam</Text>
        </View>
      </View>
      <View style={styles.separator} />

      {/* Description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/300x150' }} // Thay bằng link ảnh phù hợp
        style={styles.image}
      />

      {/* Description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1, // Thêm flexGrow cho phép container kéo dài khi nội dung lớn
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  activeTab: {
    backgroundColor: '#007BFF',
    color: '#fff',
  },
  inactiveTab: {
    backgroundColor: '#e7e7e7',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  dateInfo: {
    fontSize: 14,
    color: '#FF3B30',
    marginTop: 10,
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
  },
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  teacherColum: {
    flexDirection: 'column',
    marginVertical: 5,
  },
  teacherImage: {
    width: 42,
    height: 42,
    borderRadius: 8,
    marginRight: 10,
  },
  teacherName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginVertical: 10,
  },
});

export default ClassDescription;
