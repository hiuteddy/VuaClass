import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const VocabularyScreen = () => {
  const navigation = useNavigation();

  // Dữ liệu danh sách từ vựng
  const vocabularyList = [
    {
      id: '1',
      word: 'Teacher',
      pronunciation: '/ˈtiː.tʃər/',
      meaning: 'Giáo viên',
      image: 'https://via.placeholder.com/150', // Thay bằng URL ảnh thật
    },
    {
      id: '2',
      word: 'Student',
      pronunciation: '/ˈstuː.dənt/',
      meaning: 'Học sinh',
      image: 'https://via.placeholder.com/150',
    },
    {
        id: '3',
        word: 'Student',
        pronunciation: '/ˈstuː.dənt/',
        meaning: 'Học sinh',
        image: 'https://via.placeholder.com/150',
      },
    // Thêm từ vựng nếu cần
  ];

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View>
        <View style={styles.iconRow}>
          <Text style={styles.word}>{item.word}</Text>
          <Image
            style={styles.iconCheck}
            source={require('../../../assets/icons/icon_Check.png')}
          />
        </View>
        <Text style={styles.pronunciation}>{item.pronunciation}</Text>
        <Text style={styles.meaning}>Định nghĩa: {item.meaning}</Text>

        <View style={styles.iconsRow}>
          <TouchableOpacity style={styles.iconRow}>
            <Image source={require('../../../assets/icons/icon_Voice.png')} />
            <Text style={styles.iconLabel}>US</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconRow}>
            <Image source={require('../../../assets/icons/icon_Voice.png')} />
            <Text style={styles.iconLabel}>UK</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/icons/icon_Edit.png')}
              style={styles.iconSave}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/icons/icon_Delete.png')}
              style={styles.iconSave}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Breadcrumb */}
      <View style={styles.breadcrumb}>
        <TouchableOpacity
          style={styles.breadcrumbItem}
          onPress={navigation.goBack}>
          <MaterialCommunityIcons
            name="home"
            size={18}
            color="#3D3D3D"
            style={styles.breadcrumbIcon}
          />
          <Text style={styles.breadcrumbText}>Trang chủ</Text>
        </TouchableOpacity>
        <MaterialCommunityIcons
          name="chevron-right"
          size={18}
          color="#3D3D3D"
        />
        <Text style={styles.breadcrumbText}>Lớp học ............</Text>
        <MaterialCommunityIcons
          name="chevron-right"
          size={18}
          color="#3D3D3D"
        />
        <Text style={styles.breadcrumbText}>Từ vựng</Text>
      </View>

      <View style={styles.separator} />
      <Text style={styles.titleVoca}>Từ vựng</Text>
      <View style={styles.separator} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Flashcards: Tiếng Anh tự học</Text>
        <Text style={styles.subtitle}>List có {vocabularyList.length} từ</Text>
        <TouchableOpacity style={styles.saveButton}>
          <Image
            source={require('../../../assets/icons/icon_Save.png')}
            style={styles.iconSave}
          />
          <Text style={styles.saveButtonText}>Lưu về từ vựng của tôi</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách từ vựng */}
      <FlatList
        data={vocabularyList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
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
  breadcrumbIcon: {
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
  },
  header: {
    marginBottom: 16,
  },
  titleVoca: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginVertical:15
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#034567',
    lineHeight: 23,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#034567',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    height: 44,
  },
  iconSave: {
    marginHorizontal: 6,
  },
  saveButtonText: {
    marginLeft: 8,
    fontSize: 14,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderColor: '#034567',
    borderWidth: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginRight: 12,
  },
  iconCheck: {
    marginLeft: '50%',
  },
  word: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  pronunciation: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  meaning: {
    fontSize: 14,
    color: '#333',
  },
  iconsRow: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
    lineHeight: 25,
    marginHorizontal: 12,
  },
});

export default VocabularyScreen;
