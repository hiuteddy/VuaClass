import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Documents from '../../home/components/Documents';

const {width} = Dimensions.get('window');
const questionTypes = [
  'True/ Fall/ Not given',
  'Multiple choice',
  'Tiêu đề bài 03',
];
const dataCategories = [
  'Tài liệu category 1',
  'Tài liệu category 2',
  'Category 3',
];
const documentsData = [
  {
    titledoc: 'Tài liệu luyện thi Ielts full 2022 ',
    date: '10h20 - 12/10/2022',
    description:
      'Chắc hẳn không ít bạn đọc vẫn đang băn khoăn Luận văn tốt nghiệp tiếng Anh là gì? Và những bước làm một bài luận văn hiệu quả...',
  },
  {
    titledoc: 'Tài liệu Ielts band 0 - 8.0 cần thiết nhất',
    date: '15h00 - 20/10/2022',
    description:
      'Bạn muốn đạt điểm số cao trong kỳ thi Ielts? Đừng bỏ qua tài liệu này!',
  },
];
const relatedTips = [
  {
    id: '1',
    title: 'Tài liệu luyện thi Ielts full 2022',
    date: '10h20 - 12/10/2022',
  },
  {
    id: '2',
    title: 'Tài liệu luyện thi Ielts full 2022',
    date: '10h20 - 12/10/2022',
  },
];
const relatedDocuments = [
  {
    id: '1',
    title: 'Tài liệu luyện thi Ielts full 2022 Freee',
    date: '10h20 - 12/10/2022',
    description:
      'Chắc hẳn không ít bạn đang băn khoăn về cách học tốt nghiệp tiếng Anh là gì?',
  },
  {
    id: '2',
    title: 'Tài liệu luyện thi Ielts full 2022',
    date: '10h20 - 12/10/2022',
    description:
      'Chắc hẳn không ít bạn đang băn khoăn về cách học tốt nghiệp tiếng Anh là gì?',
  },
];

const DocumentDetailScreen = () => {
  const renderCategoryButton = (item, index) => (
    <TouchableOpacity key={index.toString()} style={styles.categoryButton}>
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderTypeItem = (type, index) => (
    <TouchableOpacity key={index.toString()} style={styles.typeItem}>
      <Text style={styles.typeText}>{type}</Text>
      <MaterialCommunityIcons name="chevron-right" size={20} color="#333" />
    </TouchableOpacity>
  );

  const TipItem = ({ item, onPressDetail }) => (
    <TouchableOpacity style={styles.tipItem} onPress={() => onPressDetail(item)}>
      {/* Hình ảnh bên trái */}
      <Image
        source={{ uri: item.imageUrl || 'https://via.placeholder.com/150' }}
        style={styles.tipImage}
      />
      {/* Nội dung bên phải */}
      <View style={styles.tipContent}>
        <Text style={styles.tipTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.tipFooter}>
          <Text style={styles.tipDate}>{item.date}</Text>
          <TouchableOpacity style={styles.tipButton} onPress={() => onPressDetail(item)}>
            <Text style={styles.tipButtonText}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  
  
  
  
  const renderRelatedDocumentItem = ({item}) => (
    <TouchableOpacity style={styles.relatedDocumentItem}>
      <Image
        source={{uri: 'https://via.placeholder.com/150'}}
        style={styles.relatedDocumentImage}
      />
      <View style={styles.relatedDocumentContent}>
        <Text style={styles.relatedDocumentTitle}>{item.title}</Text>
        <Text style={styles.relatedDocumentDate}>{item.date}</Text>
        <Text style={styles.relatedDocumentDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Document Title */}
      <Text style={styles.title}>
        Tiêu đề tài liệu Tiêu đề tài liệu Tiêu đề tài liệu
      </Text>
      <Text style={styles.date}>10h20 - 12/10/2022</Text>

      {/* Categories */}
      <View style={styles.categories}>
        {dataCategories.map(renderCategoryButton)}
      </View>

      <View style={styles.line} />

      {/* Price and Actions */}
      <View style={styles.priceActions}>
        <Text style={styles.price}>Miễn phí</Text>
        <View style={styles.priceActions}>
          <MaterialCommunityIcons
            name="bookmark-outline"
            size={24}
            color="#333"
          />
          <MaterialCommunityIcons name="heart-outline" size={24} color="#333" />
        </View>
      </View>

      {/* Image */}
      <Image
        source={{uri: 'https://via.placeholder.com/400'}}
        style={styles.documentImage}
      />
      <View style={styles.line} />

      {/* Description */}
      <Text style={styles.descriptionTitle}>Giới thiệu về reading</Text>
      <Text style={styles.descriptionText}>
        The IELTS Reading test comprises of 3 paragraphs, for which you will get
        a total of 60 minutes to complete...
      </Text>

      {/* Types */}
      <View style={styles.typesContainer}>
        <Text style={styles.sectionTitle}>Các dạng đề</Text>
        <View style={styles.line} />
        {questionTypes.map(renderTypeItem)}
      </View>

      {/* Related Tips */}
      <Text style={styles.sectionTitle}>Các tip liên quan</Text>
      <FlatList
        data={relatedTips}
        renderItem={TipItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        horizontal={true} // Hiển thị danh sách theo chiều dọc
      />

      {/* Related Documents */}
      <Text style={styles.sectionTitle}>Tài liệu liên quan</Text>
      <Documents
        data={documentsData} // Truyền dữ liệu đúng
        horizontal={true}
        showIcons={true} // Không hiển thị icon
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: '#e3f2fd',
    padding: 8,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: '#1976d2',
  },
  priceActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  documentImage: {
    height: 223,
    borderRadius: 8,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  tipItem: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2, // Đối với Android
    shadowColor: '#000', // Đối với iOS
    shadowOffset: { width: 0, height: 2 }, // Đối với iOS
    shadowOpacity: 0.1, // Đối với iOS
    shadowRadius: 4, // Đối với iOS
  },
  tipImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  tipContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  tipFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tipDate: {
    fontSize: 12,
    color: '#888888',
  },
  tipButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#007bff',
    borderRadius: 4,
  },
  tipButtonText: {
    color: '#ffffff',
    fontSize: 12,
  },

  relatedDocumentImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  relatedDocumentContent: {
    flex: 1,
  },
  relatedDocumentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  relatedDocumentDate: {
    fontSize: 12,
    color: '#888',
    marginVertical: 4,
  },
  relatedDocumentDescription: {
    fontSize: 12,
    color: '#666',
  },
  typesContainer: {
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  typeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  typeText: {
    fontSize: 14,
    color: '#333',
  },
  line: {
    height: 1,
    backgroundColor: '#ddd',
  },
});

export default DocumentDetailScreen;
