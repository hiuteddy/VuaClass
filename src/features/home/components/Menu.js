import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Menu = ({data}) => {
  const renderFeature = (item) => (
    <TouchableOpacity style={styles.button} key={item.id}>
      <MaterialCommunityIcons name={item.icon} size={16} color="#3D3D3D" />
      <Text style={styles.title}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          {data.map((item) => renderFeature(item))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 14, // font-size
    fontWeight: '500', // font-weight
    fontFamily: 'Roboto-Medium', // font-family (hãy đảm bảo bạn đã tải font này)
    lineHeight: 18.75, // line-height
    marginLeft:8,
    textDecorationLine: 'none', // React Native không có text-decoration-skip-ink
    color: '#3D3D3D', // background-color thay vì background: var()
  },
  
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height:35,
    justifyContent: 'flex-start',
    width: '48%', // Đảm bảo 2 nút hiển thị trên cùng một hàng
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom:10,
    elevation: 2,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default Menu;
