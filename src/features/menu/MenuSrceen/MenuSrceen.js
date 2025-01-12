import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    id: '1',
    title: 'Đề thi',
    items: [],
  },
  {
    id: '2',
    title: 'Khóa học',
    items: [
      { id: '1', name: 'Khóa 3.0 - 4.0 Ielts' },
      { id: '2', name: 'Khóa 3.0 - 4.0 Ielts' },
      { id: '3', name: 'Khóa 3.0 - 4.0 Ielts' },
      { id: '4', name: 'Khóa 3.0 - 4.0 Ielts' },
    ],
  },
  {
    id: '3',
    title: 'Tài liệu',
    items: [],
  },
  {
    id: '4',
    title: 'Tin tức',
    items: [],
  },
];

const MenuSrceen = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <MaterialCommunityIcons
        name="book-outline"
        size={20}
        color="#666"
        style={styles.itemIcon}
      />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {data.map((category) => (
        <View key={category.id} style={styles.accordion}>
          {/* Accordion Header */}
          <TouchableOpacity
            style={styles.header}
            onPress={() => toggleExpand(category.id)}
          >
            <View style={styles.headerContent}>
              <MaterialCommunityIcons
                name={
                  category.title === 'Đề thi'
                    ? 'file-document-outline'
                    : category.title === 'Khóa học'
                    ? 'school-outline'
                    : category.title === 'Tài liệu'
                    ? 'folder-outline'
                    : 'newspaper-variant-outline'
                }
                size={20}
                color="#034567"
              />
              <Text style={styles.headerText}>{category.title}</Text>
            </View>
            {(category.title === 'Khóa học' || category.title === 'Tài liệu') && (
              <MaterialCommunityIcons
                name={
                  expandedId === category.id ? 'chevron-up' : 'chevron-down'
                }
                size={20}
                color="#034567"
              />
            )}
          </TouchableOpacity>

          {/* Accordion Content */}
          {expandedId === category.id && category.items.length > 0 && (
            <FlatList
              data={category.items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  accordion: {
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height:51
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#034567',
    marginLeft: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemIcon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 14,
    color: '#333',
  },
});

export default MenuSrceen;
