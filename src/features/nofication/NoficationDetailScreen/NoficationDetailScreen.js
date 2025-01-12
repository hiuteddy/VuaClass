import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const NotificationDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {title, description, time} = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Breadcrumb */}
      <View style={styles.breadcrumb}>
        {/* Icon Home */}

        <TouchableOpacity
          style={styles.breadcrumbItem}
          onPress={navigation.goBack}>
          <MaterialCommunityIcons
            name="home"
            size={18}
            color="#3D3D3D"
            style={styles.icon}
          />
          <Text style={styles.breadcrumbText}>Trang chủ</Text>
        </TouchableOpacity>

        {/* Chevron + Thông báo */}
        <MaterialCommunityIcons
          name="chevron-right"
          size={18}
          color="#3D3D3D"
        />
        <Text style={styles.breadcrumbText}>Thông báo</Text>

        {/* Chevron + Thông báo hệ thống */}
        <MaterialCommunityIcons
          name="chevron-right"
          size={18}
          color="#3D3D3D"
        />
        <Text style={styles.breadcrumbText}>Thông báo hệ thống</Text>
      </View>

      <View style={styles.separator} />

      {/* Main Header */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/icons/icon_Award.png')}
          style={styles.headerIcon}
        />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
      </View>

      {/* Time and Description */}
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Image */}
      <Image
        source={require('../../../assets/images/image_NofiDetail.png')}
        style={styles.image}
      />

      {/* Additional Description */}
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
  },
  breadcrumb: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  breadcrumbItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  breadcrumbText: {
    fontSize: 14,
    color: '#3D3D3D',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },

  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerIcon: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  time: {
    fontSize: 13,
    color: '#888',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginVertical: 15,
  },
  description: {
    fontSize: 15,
    color: '#555',
    lineHeight: 17,
  },
});

export default NotificationDetailScreen;
