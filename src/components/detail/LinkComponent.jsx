import React, { useEffect, useState, useRef } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Modal,
  ActivityIndicator,
  Image,
} from 'react-native';

import _ from 'lodash';
import numeral from 'numeral';
import dayjs from 'dayjs';

import { LightColors, DarkColors } from 'src/constants/Colors';
import DefaultStyles from 'src/constants/DefaultStyles';
import { WIDTH, HEIGHT, DEFAULT_MARGIN, WU } from 'src/constants/Layout';
import { FontAwesome } from '@expo/vector-icons';

export default function LinkComponent({ onPress, text, icon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome name={icon} color="white" size={22} />
        <Text style={{ color: 'white', opacity: 0.8, marginLeft: WU * 5, fontWeight: 'bold' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
