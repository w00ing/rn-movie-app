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
import PosterComponent from './PosterComponent';
import TitleComponent from './TitleComponent';
import { apiImage } from 'src/api/api';
import VotesComponent from './VotesComponent';
import { useNavigation } from '@react-navigation/native';

export default function VerticalLayoutComponent({ id, posterImage, name, votes, isTv = false }) {
  const navigation = useNavigation();

  const goToDetailScreen = () => {
    navigation.navigate('DetailScreen', { id, name, posterImage, votes, isTv });
  };
  return (
    <TouchableOpacity style={{ alignItems: 'center', marginRight: WU * 20 }} onPress={goToDetailScreen}>
      <PosterComponent imageUrl={posterImage} />
      <Text style={{ color: 'white', fontWeight: '500', marginTop: WU * 10, marginBottom: WU * 5 }}>
        {_.truncate(name, { length: 10 })}
      </Text>
      {votes > 0 && <VotesComponent votes={votes} />}
    </TouchableOpacity>
  );
}
