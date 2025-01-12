import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const UnitList = ({units, navigation}) => {
  const [expandedUnits, setExpandedUnits] = useState({}); // Lưu trạng thái mở rộng cho từng Unit

  const toggleExpand = unitId => {
    setExpandedUnits(prev => ({
      ...prev,
      [unitId]: !prev[unitId], // Đảo trạng thái mở rộng
    }));
  };

  return (
    <FlatList
      data={units}
      keyExtractor={unit => unit.id.toString()}
      renderItem={({item: unit}) => (
        <View style={styles.unitContainer}>
          {/* Unit Header */}
          <TouchableOpacity
            style={styles.unitHeader}
            onPress={() => toggleExpand(unit.id)}>
            <Text style={styles.unitTitle}>{unit.title}</Text>
            {unit.badge && <Text style={styles.badge}>{unit.badge}+</Text>}
            <MaterialCommunityIcons
              name={expandedUnits[unit.id] ? 'chevron-up' : 'chevron-down'}
              size={20}
              color="#333"
            />
          </TouchableOpacity>

          {/* Unit Items */}
          {expandedUnits[unit.id] && (
            <>
              {/* Bài Giảng */}
              <TouchableOpacity
                onPress={() => navigation.navigate('LessonDetailScreen')}>
                <View style={styles.itemRow}>
                  <View style={styles.itemLeft}>
                    <Text style={styles.itemCount}>{unit.lessonCount}</Text>
                    <Text style={styles.itemText}>Bài Giảng</Text>
                  </View>

                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={20}
                    color="#333"
                  />
                </View>
              </TouchableOpacity>

              {/* Bài Tập */}
              <TouchableOpacity
                  onPress={() => navigation.navigate('ExerciseDetailScreen')}>
              <View style={styles.itemRow}>
                <View style={styles.itemLeft}>
                  <Text style={styles.itemCount}>{unit.exerciseCount}</Text>
                  <Text style={styles.itemText}>Bài Tập</Text>
                </View>
               
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={20}
                    color="#333"
                  />
              </View>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={() => navigation.navigate('ListDocumentScreen')}>
              {/* Tài Liệu */}
              <View style={styles.itemRow}>
                <View style={styles.itemLeft}>
                  <Text style={styles.itemCount}>{unit.documentCount}</Text>
                  <Text style={styles.itemText}>Tài Liệu</Text>
                </View>
              
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={20}
                    color="#333"
                  />
              </View>
              </TouchableOpacity>

            </>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  unitContainer: {
    borderRadius: 8,
    marginBottom: 15,
  },
  unitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: 54,
    borderRadius: 8,
    backgroundColor: '#E7E7E7',
  },
  unitTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  badge: {
    backgroundColor: '#FF3B30',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: '65%',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCount: {
    height: 32,
    width: 32,
    borderColor: '#034567',
    borderWidth: 1,
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 16,
    marginRight: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  itemText: {
    fontSize: 14,
    color: '#333',
  },
});

export default UnitList;
