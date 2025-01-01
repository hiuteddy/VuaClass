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

const Registered = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin đăng nhập.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.replace('Home');
    }, 2000); // Giả lập thời gian xử lý
  };
  const handleRegistered = () => {
    navigation.replace('Login');
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />

      <Text style={styles.heading}>ĐĂNG KÝ</Text>
      <Input
        label="Họ tên"
        placeholder="Nhập họ tên"
        value={name}
        onChangeText={setName}
        isRequired
      />
      <Input
        label="Email"
        placeholder="Nhập Email"
        value={email}
        onChangeText={setEmail}
        isRequired
      />
      <Input
        label="Số điện thoại"
        placeholder="Nhập số điện thoại"
        value={phone}
        onChangeText={setPhone}
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

      <Input
        label="Xác nhận mật khẩu"
        placeholder="Nhập lại mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        isRequired
      />
      <Button
        title="Đăng Ký"
        onPress={handleLogin}
        isPrimary
        isLoading={isLoading}
      />
      <Text style={styles.orText}>Hoặc đăng ký bằng</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.socialButton,
            styles.socialButtonFacebookandGoogle,
            {marginRight: 15},
          ]}>
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
        <Text style={styles.ortext1}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity onPress={handleRegistered}>
          <Text style={styles.loginnow}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registered;

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
    justifyContent: 'center', // Căn giữa theo chiều ngang
    marginTop: '10%',
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
    shadowColor: '#000', // Màu bóng đổ
    shadowOffset: {width: 0, height: 0}, // Tọa độ bóng đổ
    shadowOpacity: 0.1, // Độ mờ của bóng
    shadowRadius: 10, // Bán kính bóng
    elevation: 5, // Đổ bóng cho Android
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
