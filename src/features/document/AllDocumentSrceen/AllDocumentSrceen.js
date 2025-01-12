import React from 'react';
import {View, FlatList} from 'react-native';
import ItemDocuments from '../../../components/Document/ItemDocuments';
import SearchWithDropdown from '../../../components/Search/SearchWithDropdown';

const categories = ['Tài liệu IELTS', 'Tài liệu TOEIC', 'Tài liệu tiếng Anh'];

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

const DocumentScreen = ({navigation}) => {
  const handleCategorySelect = category => {
    console.log('Selected Category:', category);
  };

  const handleSearch = text => {
    console.log('Search Text:', text);
  };

  const handlePressItem = item => {
    navigation.navigate('DocumentDetailSrceen', {document: item});
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5',paddingHorizontal:15}}>
      <SearchWithDropdown
        categories={categories}
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
      />
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
            type={item.type}
            onPress={() => handlePressItem(item)}
          />
        )}
      />
    </View>
  );
};

export default DocumentScreen;
