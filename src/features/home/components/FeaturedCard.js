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

const FeaturedCard = ({title, data, horizontal}) => {
  const backgroundColors = ['#FFD700', '#FF6347', '#32CD32', '#87CEEB'];

  return (
    <View style={styles.featuredCard}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity>
          <View style={styles.viewAllContainer}>
            <Text style={styles.viewAll}>Tất Cả </Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={16}
              color="#034567"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal={horizontal}
        data={data}
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
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
              <TouchableOpacity style={styles.detailButton}>
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
  featuredCard: {
    marginHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  headerText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18.75,
    color: '#034567',
    textAlign: 'center',
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAll: {
    fontWeight: '500',
    fontSize: 12,
    color: '#034567',
  },
  icon: {
    marginLeft: 5,
  },
  card: {
    width: 300,
    height: 441,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 15,
    elevation: 3,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 180,
  },
  statusBadge: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#FFA500',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  date: {
    fontSize: 12,
    borderRadius: 5,
    color: '#3D3D3D',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    lineHeight: 16.41,
  },
  title: {
    width: 280,
    height: 50,
    marginVertical: 5,
    fontSize: 16,
    fontWeight: '700',
    color: '#3D3D3D',
    fontFamily: 'Roboto-Medium',
    lineHeight: 18.41,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#E0F7FA',
    color: '#00796B',
    fontSize: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statIcon: {
    width: 38,
    height: 38,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statText: {
    color: '#fff',
    fontSize: 16,
  },
  statLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginRight: 5,
  },
  paidText: {
    fontSize: 14,
    color: '#FF6347',
  },
  freeText: {
    fontSize: 14,
    color: '#34A853',
  },
  detailButton: {
    width: 94,
    height: 24,
    backgroundColor: '#034567',
    borderRadius: 5,
    justifyContent: 'center',
  },
  detailText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },
});

export default FeaturedCard;
