// HeaderContainer.js
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import { useTabContext } from '../../navigation/TabContext';


const HeaderContainer = ({ currentTab }) => {
  const navigation = useNavigation();
  const { currentProfileTab, setCurrentProfileTab, resetOtherTabInProfile } =
    useTabContext();

  const onAvatarPress = () => {
    // Nếu tab hiện tại khác với tab đang ở Profile, reset tab cũ
    resetOtherTabInProfile(navigation, currentTab);

    // Cập nhật tab hiện tại
    setCurrentProfileTab(currentTab);

    // Điều hướng vào Profile
    navigation.navigate('Profile');
  };

  return (
    <Header
      onSearchPress={() => console.log('Search')}
      onAvatarPress={onAvatarPress}
    />
  );
};

export default HeaderContainer;
