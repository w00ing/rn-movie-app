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
  Button,
  ActivityIndicator,
} from 'react-native';
import { LightColors, DarkColors } from 'src/constants/Colors';

export default function MovieScreen(props) {
  return (
    <View>
      <Text>Movie</Text>
      <Button title="Detail" onPress={() => props.navigation.navigate('DetailScreen')} />
    </View>
  );
}
