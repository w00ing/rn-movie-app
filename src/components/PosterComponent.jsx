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
  Image,
} from 'react-native';
import { apiImage } from 'src/api/api';
import { LightColors, DarkColors } from 'src/constants/Colors';
import DefaultStyles from 'src/constants/DefaultStyles';
import { WIDTH, HEIGHT, DEFAULT_MARGIN, WU } from 'src/constants/Layout';

export default function PosterComponent({ imageUrl }) {
  return <Image style={{ width: WU * 100, height: WU * 160, borderRadius: 4 }} source={{ uri: apiImage(imageUrl) }} />;
}
