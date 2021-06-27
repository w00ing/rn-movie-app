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
import dayjs from 'dayjs';

import { LightColors, DarkColors } from 'src/constants/Colors';
import DefaultStyles from 'src/constants/DefaultStyles';
import { WIDTH, HEIGHT, DEFAULT_MARGIN, WU } from 'src/constants/Layout';
import TitleComponent from './TitleComponent';

export default function ListComponent({ title, children }) {
  return (
    <View>
      <TitleComponent title={title} />
      <View style={{ width: '100%', marginTop: WU * 20 }}>{children}</View>
    </View>
  );
}
