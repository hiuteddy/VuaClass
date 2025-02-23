import {Image, StyleSheet, Text, View} from 'react-native';

const MarkContainer = ({iconSource, text}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'column',
        marginRight: 18,
      }}>
      <Image source={iconSource} style={styles.iconMark} />
      <Text style={styles.textMark}>{text}</Text>
    </View>
  );
};

export default MarkContainer;

const styles = StyleSheet.create({
  markContainer: {
    borderColor: '#034567',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 16,
    padding: 10,
    maxWidth: '90%', // Giới hạn chiều rộng tối đa
    alignSelf: 'center', // Căn giữa View trong View cha (tùy chọn)
  },

  iconMark: {
    width: 38,
    height: 38,
  },
  textMark: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});
