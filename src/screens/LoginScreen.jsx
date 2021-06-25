import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';

export default function LoginScreen(props) {
  const handleGoToCreateAccountScreen = () => {
    props.navigation.navigate('CreateAccountScreen');
  };
  return (
    <View>
      <Text>Screen</Text>
      <TouchableOpacity onPress={handleGoToCreateAccountScreen}>
        <Text>Go to Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
