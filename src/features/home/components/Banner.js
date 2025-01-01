import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        {/* Image as background */}
        <Image
          source={require('../../../assets/images/baner_Home.png')} // Đường dẫn đến ảnh nền của bạn
          style={styles.bannerImage}
        />

        {/* Content on top of image */}
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Học tiếng Anh cùng EPRO</Text>
          <Text style={styles.bannerSubtitle}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s
          </Text>

          {/* Buttons */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Đăng ký tài khoản ngay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              Tìm hiểu khóa học tại EPRO
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15, // Thêm khoảng cách bên trong container
  },
  banner: {
    width: '100%', // Chiều rộng theo tỷ lệ màn hình (90%)
    borderRadius: 8, // Bo góc
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000', // Hiệu ứng đổ bóng
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  bannerImage: {
    width: 'auto',
    height: 406,
    borderRadius: 8, // Bo góc ảnh
  },
  bannerContent: {
    position: 'absolute', // Hiển thị nội dung trên ảnh
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 22, // Kích thước tiêu đề lớn hơn
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  bannerSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
    lineHeight: 18,
  },
  primaryButton: {
    backgroundColor: '#003366', // Màu xanh đậm cho nút chính
    borderRadius: 25, // Bo góc tròn cho nút
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#FFCC33', // Màu vàng cho nút phụ
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    width: '80%',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#003366', // Màu chữ của nút phụ
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Banner;
