import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import icon từ thư viện

const { width } = Dimensions.get('window');

const SearchWithDropdown = ({ categories, onCategorySelect, onSearch }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => {
        onCategorySelect(item);
        setDropdownVisible(false); // Đóng dropdown sau khi chọn
      }}
    >
      <Text style={styles.categoryItemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {/* Dropdown Button */}
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
          <Text style={styles.dropdownButtonText}>Danh mục</Text>
          <MaterialCommunityIcons
            name={isDropdownVisible ? 'chevron-up' : 'chevron-down'} 
            size={20}
            color="'#777777"
          />
        </TouchableOpacity>

        {/* Vertical Divider */}
        <View style={styles.verticalDivider} />

        {/* Search Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Nhập tìm kiếm"
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
            if (onSearch) onSearch(text);
          }}
        />

        {/* Search Icon */}
        <TouchableOpacity>
          <MaterialCommunityIcons name="magnify" size={20} color="#333" /> 
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 15,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownButtonText: {
    fontSize: 14,
    marginRight: 4,
    color:'#777777'
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
  dropdown: {
    position: 'absolute',
    top: 50, // Đẩy dropdown xuống dưới thanh tìm kiếm
    left: 16,
    width: width - 32,
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
