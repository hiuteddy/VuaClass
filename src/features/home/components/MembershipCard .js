import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

const MembershipCard = ({data, titleHeader}) => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.textTitle}>{item.title}</Text>

      <View style={styles.divider} />

      {/* Description */}
      <Text style={styles.description}>{item.description}</Text>

      {/* Courses Section */}
      <Text style={styles.sectionTitle}>Lớp học</Text>
      {item.courses.map((course, index) => (
        <View key={index} style={styles.listItem}>
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={16}
            color="#034567"
          />
          <Text style={styles.listText}>{course}</Text>
        </View>
      ))}

      {/* Documents Section */}
      <Text style={styles.sectionTitle}>Tài liệu</Text>
      {item.documents.map((document, index) => (
        <View key={index} style={styles.listItem}>
          <MaterialCommunityIcons
            name="check-circle"
            size={16}
            color="#034567"
          />
          <Text style={styles.listText}>{document}</Text>
        </View>
      ))}

      {/* Price */}
      <Text style={styles.price}>{item.price}</Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Mua ngay')}>
        <Text style={styles.buttonText}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>{titleHeader}</Text>
        <TouchableOpacity>
          <View style={styles.viewAllContainer}>
            <Text style={styles.viewAll}>Tất Cả</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={16}
              color="#034567"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={flatListRef}
      />
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              activeIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  titleHeader: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '700',
    color: '#034567',
    textAlign: 'center',
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAll: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#034567',
  },
  icon: {
    marginLeft: 5,
  },
  card: {
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    height: 434,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
  },
  textTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    marginVertical: 15,
    fontWeight: '500',
    textAlign: 'center',

    lineheight: 18.75,

    color: '#3D3D3D',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
  },

  description: {
    fontSize: 14,  // Đặt kích thước chữ là 14px
    fontWeight: '400',  // Sử dụng font weight 400 tương đương với regular
    color: '#666',  // Màu sắc là #666
    fontFamily: 'Quicksand',  // Sử dụng font 'Quicksand'
    lineHeight: 17.5,  // Đặt line-height là 17.5px
    textAlign: 'justify',  // Căn lề justify cho văn bản
    textDecorationLine: 'none',
    marginTop:8  // Loại bỏ gạch chân (text-decoration không có sẵn trong React Native)
  },  
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 7,
    color: '#034567',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#3D3D3D',
  },
  price: {
    fontSize: 18, // Đặt kích thước chữ là 18px
    fontWeight: '700', // Sử dụng font weight 700 tương đương với bold
    color: '#034567',
    textAlign: 'center',
    fontFamily: 'Roboto-ThinItalic',
    marginVertical: 12, // Cung cấp khoảng cách trên và dưới
    lineHeight: 22.5, // Đặt line-height là 22.5px
  },
  button: {
    height: 52,
    backgroundColor: '#FFA726',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 35,
    marginTop:20,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeIndicator: {
    height:6,
    width:12,
    borderRadius:6,
    backgroundColor: '#034567',
  },
});

export default MembershipCard;
