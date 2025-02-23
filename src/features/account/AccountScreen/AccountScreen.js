import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import MarkContainer from '../component/MarkContainer';
import CardMenu from '../component/CardMenu';
import Button_Account from '../component/Button_account';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scaleWidth = SCREEN_WIDTH / 428;
const scaleHeight = SCREEN_HEIGHT / 926;

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

const MarkOverAll = () => {
  return (
    <View style={styles.markContainer}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <MarkContainer
            iconSource={require('../../../assets/icons/icon_headphone.png')}
            text={'0/9.0'}
          />
          <MarkContainer
            iconSource={require('../../../assets/icons/icon_read.png')}
            text={'0/9.0'}
          />
          <MarkContainer
            iconSource={require('../../../assets/icons/icon_write.png')}
            text={'0/9.0'}
          />
          <MarkContainer
            iconSource={require('../../../assets/icons/icon_speak.png')}
            text={'0/9.0'}
          />
        </View>

        <TouchableOpacity style={styles.buttonMark}>
          <Text>Xem chi tiết</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 16, fontFamily: 'Roboto-Bold', marginBottom: 10}}>
          Điểm Over All
        </Text>

        <View style={styles.progressContainer}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Roboto-Bold',
              marginBottom: 10,
              textAlign: 'center',
              alignSelf: 'center',
            }}>
            00
          </Text>
        </View>
      </View>
    </View>
  );
};

const MarkGoal = () => {
  return (
    <View style={styles.markContainer}>
      <View style={{width: '70%'}}>
        <Text style={{fontSize: 16, fontFamily: 'Roboto-Bold'}}>
          Mục tiêu của bạn
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20, fontFamily: 'Roboto-Bold'}}>IELTS</Text>
          <Text style={{fontSize: 16, fontFamily: 'Roboto'}}>31/12/2023</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontFamily: 'Roboto', marginRight: 5}}>
            Còn lại:
          </Text>
          <Text style={{fontSize: 16, fontFamily: 'Roboto', color: '#F5AC3D'}}>
            0 ngày
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonMark}>
          <Text>Sửa mục tiêu</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 16, fontFamily: 'Roboto-Bold', marginBottom: 10}}>
          Điểm mục tiêu
        </Text>

        <View style={styles.progressContainer}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Roboto-Bold',
              marginBottom: 10,
              textAlign: 'center',
              alignSelf: 'center',
            }}>
            7.0
          </Text>
        </View>
      </View>
    </View>
  );
};

const AccountScreen = ({route}) => {
  const navigation = useNavigation();
  const breadcrumbs = [{name:'Trang chủ',icon: 'home'}, {name: 'Tài khoản'}];
  return (
    <ScrollView style={styles.container}>
      <Breadcrumb
        navigation={navigation}
        route={route}
        breadcrumbs={breadcrumbs}
      />
      <View style={styles.bannerContainer}>
        <Image
          source={require('../../../assets/images/banner_image.png')}
          style={styles.banner}
        />
        <TouchableOpacity style={styles.cameraButton}>
          <Image
            source={require('../../../assets/icons/icon_camera.png')}
            style={styles.iconCamera}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Container */}
      <View style={styles.profileContainer}>
        {/* Avatar Container */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.cameraButtonAvatar}>
            <Image
              source={require('../../../assets/icons/icon_camera.png')}
              style={styles.iconCameraAvatar}
            />
          </TouchableOpacity>
        </View>

        {/* Name and Role Container */}
        <View style={styles.nameContainer}>
          <Text style={styles.fullName}>Nguyễn Văn Toàn</Text>
          <View style={styles.roleContainer}>
            <Text style={styles.role}>Học viên</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Image
              source={require('../../../assets/icons/icon_edit_profile.png')}
              style={styles.iconEdit}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider}></View>

      <MarkOverAll />
      <MarkGoal />

      <View style={styles.divider}></View>

      <CardMenu
        icon={require('../../../assets/icons/icon_user.png')}
        text={'Thông tin cá nhân'}
        screenName="SettingsDeltails"
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_chart.png')}
        text={'Báo cáo'}
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_daskboard.png')}
        text={'Phân tích'}
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_pen.png')}
        text={'Bài đã thi'}
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_book.png')}
        text={'Đề thi đã lưu'}
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_file.png')}
        text={'Tài liệu đã lưu'}
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_eLearning.png')}
        text={'Gói đã mua'}
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_text.png')}
        text={'Từ vựng'}
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_term.png')}
        text={'Điểm danh'}
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_languague.png')}
        text={'Ngôn ngữ'}
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_infor.png')}
        text={'Thông tin phần mềm'}
      />
      <CardMenu
        icon={require('../../../assets/icons/icon_lock.png')}
        text={'Đổi mật khẩu'}
      />

      <Button_Account text={'Đăng xuất'} />
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {flex: 1, backgroundColor: '#F9F9F9', padding: 16},
  markContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#034567',
    borderWidth: 1,
    backgroundColor: '#EDF9FF',
    borderRadius: 16,
    marginTop: 16,  
    padding: 15,
  },
  iconMark: {width: 38 * scaleWidth, height: 38},
  textMark: {fontSize: 14, fontFamily: 'Roboto-Regular'},
  buttonMark: {
    width: 114 * scaleWidth,
    height: 24 * scaleWidth,
    borderColor: '#034567',
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#A5DFFD',
  },

  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop:16
  },
  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: 120,
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 8,
    borderRadius: 32,
  },
  iconCamera: {
    width: 30,
    height: 30,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -50,
    paddingLeft: 16,
  },
  avatarContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    marginRight: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  cameraButtonAvatar: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    borderRadius: 20,
  },
  iconCameraAvatar: {
    width: 32,
    height: 32,
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 50,
  },
  fullName: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#000000',
  },
  roleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: '#F5AC3D',
    borderRadius: 8,
    marginTop: 5,
  },
  role: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#FFFFFF',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  iconEdit: {
    width: 26,
    height: 26,
    top: 5,
    left:90
  },
});

export default AccountScreen;
