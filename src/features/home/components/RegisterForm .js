import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ModalSelector from 'react-native-modal-selector';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RegisterForm = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { key: 1, label: 'Khóa học A' },
    { key: 2, label: 'Khóa học B' },
    { key: 3, label: 'Khóa học C' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Thay đổi trạng thái mở/đóng dropdown
  };

  return (
    <LinearGradient
      colors={['rgba(172, 219, 233, 0.25)', 'rgba(255, 255, 255, 0)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.title}>Đăng ký tư vấn khóa học</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Họ tên*</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập họ tên của bạn"
          placeholderTextColor="#777777"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email*</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập email của bạn"
          placeholderTextColor="#777777"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Số điện thoại*</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại"
          placeholderTextColor="#777777"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Khóa học cần tư vấn*</Text>
        <ModalSelector
          data={courses}
          initValue="Chọn khóa học"
          onChange={(option) => setSelectedCourse(option.label)}
          onClose={() => setIsOpen(false)} // Khi đóng modal, set lại trạng thái
        >
          <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
            <Text style={styles.dropdownText}>
              {selectedCourse ? selectedCourse : 'Chọn khóa học'}
            </Text>
            {/* Thêm icon lên xuống */}
            <MaterialCommunityIcons
              name='chevron-down' // Sửa lại icon cho đúng
              size={24}
              color="#333"
              style={styles.icon}
            />
          </TouchableOpacity>
        </ModalSelector>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nội dung cần tư vấn</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Nhập nội dung"
          placeholderTextColor="#777777"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 25,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 39,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#E7E7E7',
    fontSize: 14,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  dropdown: {
    height: 39,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    flexDirection: 'row', // Sắp xếp các phần tử theo chiều ngang
    alignItems: 'center', // Căn giữa theo chiều dọc
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
    flex: 1, // Để Text chiếm hết không gian còn lại
  },
  icon: {
    marginLeft: 10, // Khoảng cách giữa text và icon
  },
  button: {
    backgroundColor: '#034567',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegisterForm;
