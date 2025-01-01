import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';


const Button = ({title, onPress, isPrimary = true, isLoading = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      style={[
        styles.button,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        isLoading && styles.disabledButton,
      ]}>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={isPrimary ? '#FFFFFF' : '#003366'}
        />
      ) : (
        <Text
          style={[
            styles.buttonText,
            isPrimary ? styles.primaryText : styles.secondaryText,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 8,
    alignItems: 'center',
    height: 51,
    marginTop:30
  },
  primaryButton: {
    backgroundColor: '#003366',
    borderWidth: 0,
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7E7E7',
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonText: {
    fontFamily:'Roboto-Medium',
    fontSize: 16,
    fontWeight:'500',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#003366',
  },
});

export default Button;
