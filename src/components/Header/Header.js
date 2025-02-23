import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';


const Header = ({onSearchPress, onAvatarPress, onLogoPress}) => {
  return (
    <View style={styles.headerContainer}>
      {/* Logo phần trái */}
      <TouchableOpacity onPress={onLogoPress} style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>

      {/* Tìm kiếm và avatar phần phải */}
      <View style={styles.rightContainer}>
        {/* Search Icon */}
        <TouchableOpacity
          onPress={onSearchPress}
          style={styles.searchContainer}>
          <Image
            source={require('../../assets/icons/icon_Search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        {/* Avatar Icon */}
        <TouchableOpacity
          onPress={onAvatarPress}
          style={styles.avatarContainer}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF', // Màu nền của Header
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 110 : 100, // Đặt chiều cao phù hợp cho iOS và Android
    width: '100%', // Đảm bảo chiếm toàn bộ chiều rộng màn hình
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 58 : 50, // Điều chỉnh padding top cho từng hệ điều hành
    // Áp dụng hiệu ứng bóng đổ
    shadowColor: '#000000', // Màu của bóng đổ
    shadowOffset: {width: 0, height: 4}, // Độ lệch của bóng đổ
    shadowOpacity: 0.1, // Độ mờ của bóng đổ
    shadowRadius: 20, // Bán kính của bóng đổ
    paddingBottom: 15,

    // Dành cho Android
    elevation: 5, // Để tạo bóng đổ trên Android
  },

  logoContainer: {
    flex: 1, // Tỷ lệ 1 phần cho logo
  },
  logo: {
    height: 36,
    resizeMode: 'contain', // Đảm bảo logo không bị biến dạng
  },

  rightContainer: {
    flexDirection: 'row',
    flex: 2, // Tỷ lệ 2 phần cho search và avatar
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  searchContainer: {
    marginRight: 20,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: 18, // Điều chỉnh borderRadius cho avatar đúng hơn
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 18, // Điều chỉnh borderRadius cho avatar
  },
});

export default Header;
