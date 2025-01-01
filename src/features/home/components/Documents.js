import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Documents = ({title, data, horizontal, showIcons = false}) => {
  return (
    <View style={styles.featuredCard}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>{title}</Text>
        <TouchableOpacity>
          <View style={styles.viewAllContainer}>
            <Text style={styles.viewAll}>Tất Cả </Text>
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
        horizontal={horizontal}
        data={data}
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
        renderItem={({item}) => (
          <View style={styles.card}>
            <View>
              <Image
                source={require('../../../assets/images/baner_Docment.png')}
                style={styles.image}
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.title}>{item.titledoc}</Text>
              <View style={styles.tags}>
                <Text style={styles.tag} numberOfLines={2} ellipsizeMode="tail">
                  {item.description}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.footer}>
              {showIcons && (
                <View style={styles.iconContainer}>
                  <TouchableOpacity style={styles.iconButton}>
                    <Image
                      source={require('../../../assets/icons/icon_Heart.png')} // Đường dẫn đến ảnh nền của bạn
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconButton}>
                    <Image
                      source={require('../../../assets/icons/icon_Share.png')} // Đường dẫn đến ảnh nền của bạn
                    />
                  </TouchableOpacity>
                </View>
              )}

              <View style={{flex: 1}} />

              <TouchableOpacity style={styles.detailButton}>
                <Text style={styles.detailText}>Xem chi tiết</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  featuredCard: {
    marginHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  titleHeader: {
    fontFamily: 'Roboto-Medium', // Đúng cú pháp React Native
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18.75,
    textUnderlinePosition: 'from-font', // Đảm bảo có hỗ trợ
    textDecorationSkipInk: 'none', // Đảm bảo có hỗ trợ
    color: '#034567', // Loại bỏ nháy đơn
    textAlign: 'center', // Đã được chuẩn hóa
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAll: {
    fontFamily: 'Roboto-Medium', // Đúng cú pháp React Native
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18.75,
    textUnderlinePosition: 'from-font', // Đảm bảo có hỗ trợ
    textDecorationSkipInk: 'none', // Đảm bảo có hỗ trợ
    color: '#034567', // Loại bỏ nháy đơn
  },
  icon: {
    marginLeft: 5,
  },
  iconContainer: {
    flexDirection: 'row',

  },
  iconButton: {
    marginRight: 15,
  },
  card: {
    boxShadow: '0px 0px 10px 0px #00000026',
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 15,
    elevation: 3,
    marginRight: 20, // Thêm khoảng cách giữa các thẻ
  },
  image: {
    width: '100%',
    height: 180,
  },

  content: {
    padding: 15,
  },
  date: {
    fontSize: 12, // Chỉ giữ một `fontSize` (xóa cái dư thừa)
    borderRadius: 5,
    color: '#3D3D3D', // Thay `background` bằng `backgroundColor`
    fontFamily: 'Roboto-Regular', // React Native hỗ trợ `fontFamily` theo kiểu này
    fontWeight: '400',
    lineHeight: 16.41, // Chuyển `line-height` sang `lineHeight`
  },
  title: {
    width: 280,
    height: 45,
    marginVertical: 5,
    fontSize: 16,
    fontWeight: '700',
    color: '#3D3D3D',
    fontFamily: 'Roboto-Medium', // React Native hỗ trợ `fontFamily` theo kiểu này
    lineHeight: 18.41, // Chuyển `line-height` sang `lineHeight`

  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: 14, // Chỉ giữ một `fontSize` (xóa cái dư thừa)
    paddingVertical: 2,
    borderRadius: 5,
    color: '#3D3D3D', // Thay `background` bằng `backgroundColor`
    fontFamily: 'Roboto-Regular', // React Native hỗ trợ `fontFamily` theo kiểu này
    fontWeight: '400',
    lineHeight: 16.41, // Chuyển `line-height` sang `lineHeight`
  },
  
  divider: {
    height: 1,
    backgroundColor: '#eee',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  paidText: {
    fontSize: 14,
    color: '#FF6347',
  },
  freeText: {
    fontSize: 14,
    color: '#34A853',
  },
  detailButton: {
    width: 94,
    height: 24,
    backgroundColor: '#034567',
    borderRadius: 5,
    justifyContent: 'center',
  },
  detailText: {
    textAlign:'center',
    color: '#fff',
    fontSize: 14,
  },
});

export default Documents;
