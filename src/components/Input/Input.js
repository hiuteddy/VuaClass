import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Input = ({
  label, // Nhãn hiển thị phía trên ô nhập liệu
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false, // Mặc định không ẩn mật khẩu
  isRequired = false, // Mặc định không yêu cầu dấu *
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text style={styles.required}> *</Text>}
        </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && isPasswordVisible}
          style={styles.input}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
            <Image
              source={
                isPasswordVisible
                  ? require('../../assets/icons/icon_Eyeopen.png')
                  : require('../../assets/icons/icon_Eyeopen.png')
              }
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  label: {
    fontSize: 14,
    color: '#3D3D3D',
    marginBottom: 5,
    fontWeight: '400',
    fontFamily:'Roboto-Regular'
  },
  required: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    fontWeight:'400',
    color: '#777777',
    fontFamily:'Roboto-Regular'
  },
  iconContainer: {
    marginEnd: 5,
  },
 
});

export default Input;
