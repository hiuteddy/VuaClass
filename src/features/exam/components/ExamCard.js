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

const ExamCard = ({data, navigation}) => {
  const backgroundColors = ['#FFD700', '#FF6347', '#32CD32', '#87CEEB'];

  const handleDetailPress = item => {
    navigation.navigate('ExamDetailScreen', {
      item,
    });
  };

  return (
    <View style={styles.featuredCard}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View>
              <Image
                source={require('../../../assets/images/item_Featured.png')}
                style={styles.image}
              />
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.tags}>
                {item.tags.map((tag, index) => (
                  <Text key={index} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.stats}>
              {item.stats.map((stat, index) => (
                <View key={index} style={styles.statItem}>
                  <View
                    style={[
                      styles.statIcon,
                      {
                        backgroundColor:
                          backgroundColors[index % backgroundColors.length],
                      },
                    ]}>
                    <Text style={styles.statText}>{stat.icon}</Text>
                  </View>
                  <Text style={styles.statLabel}>{stat.text}</Text>
                </View>
              ))}
            </View>

            <View style={styles.divider} />

            {/* Footer with icon */}
            <View style={styles.footer}>
              <View style={styles.statusContainer}>
                {item.isPaid && (
                  <MaterialCommunityIcons
                    name="cash"
                    size={16}
                    color="#FF6347"
                    style={styles.statusIcon}
                  />
                )}
                <Text style={item.isPaid ? styles.paidText : styles.freeText}>
                  {item.isPaid ? 'Trả phí' : 'Miễn phí'}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleDetailPress(item)}
                style={styles.detailButton}>
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
  featuredCard: {paddingVertical: 16, marginBottom: 70},
  card: {
    height: 513,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 25,
    elevation: 3,
  },
  image: {width: '100%', height: 223},
  statusBadge: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#FFA500',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusText: {color: '#fff', fontSize: 12, fontWeight: 'bold'},
  content: {padding: 15},
  date: {fontSize: 12, color: '#3D3D3D', lineHeight: 16.41},
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3D3D3D',
    marginTop: 5,
    lineHeight: 18.41,
  },
  tags: {flexDirection: 'row', flexWrap: 'wrap'},
  tag: {
    backgroundColor: '#E0F7FA',
    color: '#00796B',
    fontSize: 12,
    marginTop: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  divider: {height: 1, backgroundColor: '#eee'},
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingHorizontal: 15,
  },
  statItem: {alignItems: 'center'},
  statIcon: {
    width: 63,
    height: 63,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statText: {color: '#fff', fontSize: 20},
  statLabel: {marginTop: 10, fontSize: 20, color: '#666'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 13,
  },
  statusContainer: {flexDirection: 'row', alignItems: 'center'},
  statusIcon: {marginRight: 5},
  paidText: {fontSize: 14, color: '#FF6347'},
  freeText: {fontSize: 14, color: '#34A853'},
  detailButton: {
    width: 96,
    height: 26,
    backgroundColor: '#034567',
    borderRadius: 5,
    justifyContent: 'center',
  },
  detailText: {textAlign: 'center', color: '#fff', fontSize: 14},
});

export default ExamCard;
