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

export default function CreateAccountScreen(props) {
  const handleGoToLoginScreen = () => {
    props.navigation.navigate('LoginScreen');
  };

  return (
    <View>
      <Text>Screen</Text>
      <TouchableOpacity onPress={handleGoToLoginScreen}>
        <Text>Go to Login screen</Text>
      </TouchableOpacity>
    </View>
  );
}
