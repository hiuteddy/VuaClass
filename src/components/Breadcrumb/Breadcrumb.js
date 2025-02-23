import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Breadcrumb = ({navigation, route, breadcrumbs}) => {
  return (
    <View>
      <View style={styles.breadcrumb}>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            {/* Hiển thị dấu chevron nếu không phải phần đầu tiên */}
            {index !== 0 && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={18}
                color="#3D3D3D"
              />
            )}

            <TouchableOpacity
              style={styles.breadcrumbItem}
              onPress={() => {
                if (crumb.icon === 'home') {
                  // Khi nhấn vào icon "home", reset navigation stack và chọn tab "Trang chủ"
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Home'}], // Chuyển về tab "Trang chủ"
                  });
                } else if (index !== breadcrumbs.length - 1) {
                  navigation.goBack(); // Quay lại màn hình trước
                }
              }}>
              {/* Hiển thị icon nếu có */}
              {crumb.icon && (
                <MaterialCommunityIcons
                  name={crumb.icon}
                  size={18}
                  color="#3D3D3D"
                />
              )}
              {/* Hiển thị tên nếu có */}
              {crumb.name && (
                <Text style={styles.breadcrumbText}>
                  {crumb.name || route.params?.classTitle}
                </Text>
              )}
            </TouchableOpacity>
          </React.Fragment>
        ))}
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumb: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  breadcrumbItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbText: {
    fontSize: 14,
    color: '#3D3D3D',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    marginHorizontal: 3, // Khoảng cách giữa các breadcrumb
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 15,
  },
});

export default Breadcrumb;
