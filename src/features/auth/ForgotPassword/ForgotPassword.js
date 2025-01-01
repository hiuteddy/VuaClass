import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    navigation.replace('Login');
  };
  const handleChangePassword = () => {
    navigation.replace('ChangePassword');
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />

      <Text style={styles.heading}>Quên Mật Khẩu</Text>
      <Input
        label="Email"
        placeholder="Nhập email"
        value={email}
        onChangeText={setEmail}
        isRequired
      />

      <Button
        title="Lấy lại mật khẩu"
        onPress={handleChangePassword}
        isPrimary
        
        isLoading={isLoading}
      />

      <View style={styles.rowtext}>
        <Text style={styles.ortext1}>Trở lại trang? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginnow}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
    color: '#003366',
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },

  loginnow: {
    color: '#034567',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  ortext1: {
    textAlign: 'center',
    color: '#777777',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },

  rowtext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Căn giữa theo chiều ngang
    position: 'absolute', // Cố định vị trí
    bottom: 40, // Cách lề dưới 40px
    left: 0, // Đảm bảo chiếm toàn chiều ngang
    right: 0, // Đảm bảo chiếm toàn chiều ngang
  },
});
