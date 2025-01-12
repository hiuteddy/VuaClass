import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const MembersList = () => {
  const members = Array(9).fill({name: 'Trần Thanh Tùng', avatar: ''});

  return (
    <View style={styles.container}>
      {members.map((member, index) => (
        <View key={index} style={styles.memberItem}>
          {/* <Image
            source={{
              uri: member.avatar || 'https://example.com/user_avatar.jpg',
            }} */}

          <Image
            source={require('../../../assets/images/avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>{member.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  memberItem: {alignItems: 'center', marginBottom: 20},
  avatar: {width: 80, height: 80, borderRadius: 35, marginBottom: 5},
  name: {fontSize: 14, color: '#333', },
});

export default MembersList;
