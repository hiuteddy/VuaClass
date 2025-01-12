import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ItemDocuments = ({ title, description, date, time, imageUrl, type, onPress }) => {
  return (
    <View style={styles.newsItem}>
      {/* Header - Image + Title + Meta */}
      <View style={styles.header}>
        <Image source={{ uri: imageUrl }} style={styles.newsImage} />
        <View style={styles.headerContent}>
          <Text style={styles.newsTitle} numberOfLines={3}>
            {title}
          </Text>
          <Text style={styles.newsMeta}>
            {time} - {date}
          </Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.newsDescription} numberOfLines={2}>
        {description}
      </Text>

      {/* Line Divider */}
      <View style={styles.line} />

      {/* Footer */}
      <View style={styles.newsFooter}>
        <View style={styles.typeContainer}>
          {/* Hiển thị icon nếu là "Học viên" */}
          {type === 'Học viên' && (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
              }}
              style={styles.icon}
            />
          )}
          {/* Luôn hiển thị chữ type nếu có */}
          {type && (
            <Text style={[styles.newsType, type === 'Miễn phí' && styles.freeType]}>
              {type}
            </Text>
          )}
        </View>

        {/* Detail Button */}
        <TouchableOpacity onPress={onPress} style={styles.detailButton}>
          <Text style={styles.detailButtonText}>Xem chi tiết</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    height:192
  },
  header: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingHorizontal:15
  },
  newsImage: {
    width: 136,
    height: 76,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  headerContent: {
    flex: 1,
    marginLeft: 10,
  },
  newsTitle: {
    fontSize: 16,
    height:50,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  newsMeta: {
    fontSize: 12,
    color: '#888',
  },
  newsDescription: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 15,
    paddingVertical:5
  },
  line: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 0, // Đường line sát lề trái
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newsType: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
    marginLeft: 4, // Không còn dùng trực tiếp `type`
  },
  freeType: {
    color: '#28a745', // Màu xanh lá cho "Miễn phí"
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  detailButton: {
    backgroundColor: '#034567',
    borderRadius: 5,
    width:90,
    height:24,
    justifyContent:'center',
  },
  detailButtonText: {
    textAlign:'center',
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ItemDocuments;
