import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Button_Account = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button_Account;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    display: 'flex',
    backgroundColor: '#034567',
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // Thêm bo góc nếu muốn
    margin:10
  },
  text: {
    color: '#FFFFFF', // Đặt màu chữ
    fontSize: 16, // Kích thước chữ
     // Đặt chữ đậm nếu cần
    textAlign: 'center', // Căn giữa văn bản
    fontFamily:'Roboto-Medium'
  },
});
