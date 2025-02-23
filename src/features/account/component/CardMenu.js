import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CardMenu = ({ icon, text, screenName }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate(screenName)}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <View style={styles.divider1}></View>
    </View>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  divider1: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});
