import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
import Colors from 'src/constants/Colors';

export default function WelcomeScreen(props) {
  const handleGoToCreateAccountScreen = () => {
    props.navigation.navigate('CreateAccountScreen');
  };

  const handleGoToLoginScreen = () => {
    props.navigation.navigate('LoginScreen');
  };

  return (
    <View>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity onPress={handleGoToCreateAccountScreen}>
        <Text>Go to Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoToLoginScreen}>
        <Text>Go to Login screen</Text>
      </TouchableOpacity>
    </View>
  );
}
