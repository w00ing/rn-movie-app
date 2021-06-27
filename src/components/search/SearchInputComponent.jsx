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
import HorizontalSiderComponent from '../HorizontalSiderComponent';

export default function SearchInputComponent({ placeholder, value, onChange, onSubmit }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      returnKeyType="search"
      style={{
        backgroundColor: 'white',
        marginHorizontal: WU * 10,
        borderRadius: 15,
        paddingHorizontal: WU * 20,
        paddingVertical: WU * 10,
        marginBottom: WU * 50,
      }}
      autoCapitalize="none"
      autoCompleteType="off"
    />
  );
}
