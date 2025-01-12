import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import ItemDocuments from '../../../components/Document/ItemDocuments';

const ListDocumentScreen = () => {
  const navigation = useNavigation();
  // Dữ liệu giả lập
  const data = [
    {
      id: 1,
      title: 'Tài liệu luyện thi Ielts full 2022',
      description: 'Chắc hẳn không ít bạn đang băn khoăn về cách học hiệu quả.',
      date: '12/10/2022',
      time: '10h20',
      imageUrl: 'https://via.placeholder.com/150',
      type: 'Miễn phí',
    },
    {
      id: 2,
      title: 'Tài liệu luyện thi Ielts full 2022',
      description: 'Chắc hẳn không ít bạn đang băn khoăn về cách học hiệu quả.',
      date: '12/10/2022',
      time: '10h20',
      imageUrl: 'https://via.placeholder.com/150',
      type: 'Học viên',
    },
  ];

  // Hàm render một tài liệu
  const renderDocument = ({item}) => (
    <View style={styles.card}>
      <View style={styles.info}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>
      <View style={styles.separator} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Xem chi tiết</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
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
        <Text style={styles.breadcrumbText}>Tài liệu</Text>
      </View>

      <View style={styles.separator} />
      <Text style={styles.header}>Tài liệu</Text>
      <View style={styles.separator} />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ItemDocuments
            title={item.title}
            description={item.description}
            date={item.date}
            time={item.time}
            imageUrl={item.imageUrl}
            onPress={() => handlePressItem(item)}
          />
        )}
      />
    </View>
  );
};

export default ListDocumentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 15,
  },
  image: {
    width: 136,
    height: 76,
    borderRadius: 8,
  },
  info: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    height: 38,
    width: 210,
    marginLeft: 10,
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 20,
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginVertical: 10,
  },
  button: {
    height:22,
    width:80,
    alignItems:'center',
    justifyContent:'center',
    alignSelf: 'flex-end',
    backgroundColor: '#034567',
    borderRadius: 4,
    marginTop: 10,
  },
  buttonText: {
    textAlign:'center',
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});
