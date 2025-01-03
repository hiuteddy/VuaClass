import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ExamDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {item, routeName} = route.params; // Lấy thông tin item và tên route

  return (
    <ScrollView style={styles.container}>
      {/* Breadcrumb */}
      <View style={styles.breadcrumb}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="home"
            size={16}
            color="#034567"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.breadcrumbText}>{' ' + routeName}</Text>
        </TouchableOpacity>

        <MaterialCommunityIcons
          name="chevron-right"
          size={16}
          color="#034567"
          style={styles.icon}
        />
        <Text style={styles.breadcrumbText}> {item.title}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  breadcrumbText: {
    fontSize: 14,
    color: '#555555',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default ExamDetailScreen;
