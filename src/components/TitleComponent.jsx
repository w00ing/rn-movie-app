import React, { useEffect, useState, useRef } from 'react';
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
import { LightColors, DarkColors } from 'src/constants/Colors';
import DefaultStyles from 'src/constants/DefaultStyles';
import { WU } from 'src/constants/Layout';

export default function TitleComponent({ title }) {
  return <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginLeft: WU * 30 }}>{title}</Text>;
}
