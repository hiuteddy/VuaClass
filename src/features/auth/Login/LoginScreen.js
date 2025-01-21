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

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin đăng nhập.');
      return;
    } else {
      // Mock item object to pass to AccountScreen
      const item = { title: 'Main', email: email }; // Example item
      navigation.replace('Main', { item, routeName: 'Main' }); // Pass item to AccountScreen
    }
  };

  const handleRegistered = () => {
    navigation.replace('Register');
  };

  const handleForgot = () => {
    navigation.replace('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ĐĂNG NHẬP</Text>
      <Input
        label="Email"
        placeholder="Nhập email"
        value={email}
        onChangeText={setEmail}
        isRequired
      />
      <Input
        label="Mật khẩu"
        placeholder="Nhập mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        isRequired
      />
      <TouchableOpacity onPress={handleForgot}>
        <Text style={styles.forgotPassword}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <Button
        title="Đăng nhập"
        onPress={handleLogin}
        isPrimary
        isLoading={isLoading}
      />
      <Text style={styles.orText}>Hoặc đăng nhập bằng</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.socialButton, styles.socialButtonFacebookandGoogle, {marginRight: 15}]}>
          <Image
            source={require('../../../assets/icons/icon_Google.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialButton, styles.socialButtonFacebookandGoogle]}>
          <Image
            source={require('../../../assets/icons/icon_Facebook.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowtext}>
        <Text style={styles.ortext1}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity onPress={handleRegistered}>
          <Text style={styles.loginnow}>Đăng ký ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

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
  forgotPassword: {
    textAlign: 'right',
    color: '#034567',
    marginTop: 30,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
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
  orText: {
    textAlign: 'center',
    color: '#777777',
    marginVertical: 25,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowtext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 10,
    borderRadius: 8,
    width: '180',
    height: 52,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  socialButtonFacebookandGoogle: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  socialText: {
    marginLeft: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});
