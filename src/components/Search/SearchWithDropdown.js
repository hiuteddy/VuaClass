import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const SearchWithDropdown = ({
  categories,
  onCategorySelect,
  onSearch,
  placeholder = 'Nhập tìm kiếm',
  searchIconColor = '#333',
  onFilterPress, // Callback khi nhấn vào icon lọc
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => {
        onCategorySelect(item);
        setDropdownVisible(false);
      }}
    >
      <Text style={styles.categoryItemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          {/* Dropdown Button */}
          <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
            <Text style={styles.dropdownButtonText}>Danh mục</Text>
            <MaterialCommunityIcons
              name={isDropdownVisible ? 'chevron-up' : 'chevron-down'}
              size={20}
              color="#777"
            />
          </TouchableOpacity>

          {/* Vertical Divider */}
          <View style={styles.verticalDivider} />

          {/* Search Input */}
          <TextInput
            style={styles.searchInput}
            placeholder={placeholder}
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              if (onSearch) onSearch(text);
            }}
          />

          {/* Search Icon */}
          <TouchableOpacity>
            <MaterialCommunityIcons name="magnify" size={20} color={searchIconColor} />
          </TouchableOpacity>
        </View>

        {/* Filter Icon */}
        <TouchableOpacity onPress={onFilterPress} style={styles.filterIconContainer}>
          <View style={styles.filterIcon}>
          <MaterialCommunityIcons name="tune" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Dropdown List */}
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Giữ khoảng cách giữa ô input và icon lọc
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownButtonText: {
    fontSize: 14,
    marginRight: 4,
    color: '#777',
  },
  verticalDivider: {
    width: 1,
    height: 20,
    backgroundColor: '#ddd',
    marginHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
  },
  filterIconContainer: {
    marginLeft: 15, // Khoảng cách giữa ô input và icon lọc
    width: 40, // Đảm bảo icon lọc có chiều rộng bằng với ô input
    height: 40, // Giữ chiều cao bằng với ô input
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    backgroundColor: '#034567', // Background xanh cho icon lọc
    borderRadius: 8,
    padding: 7,
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    zIndex: 1000,
  },
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  categoryItemText: {
    fontSize: 14,
    color: '#333',
  },
});

export default SearchWithDropdown;
