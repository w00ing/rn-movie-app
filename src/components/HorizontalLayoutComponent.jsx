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

export default function HorizontalLayoutComponent({ id, posterImage, overview, name, releaseDate, isTv = false }) {
  const navigation = useNavigation();

  const goToDetailScreen = () => {
    navigation.navigate('DetailScreen', { id, name, posterImage, overview, releaseDate, isTv });
  };
  return (
    <TouchableOpacity
      style={{ paddingHorizontal: WU * 30, marginBottom: WU * 30, flexDirection: 'row', alignItems: 'flex-start' }}
      onPress={goToDetailScreen}
    >
      <PosterComponent imageUrl={posterImage} />
      <View style={{ alignItems: 'flex-start', width: '60%', marginLeft: WU * 25 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: WU * 10, marginBottom: WU * 10 }}>
          {_.truncate(name, { length: 25 })}
        </Text>
        {releaseDate && <Text style={{ color: 'white', fontSize: 12 }}>{dayjs(releaseDate).format('YYYY-MM-DD')}</Text>}
        <Text style={{ color: 'white', marginTop: WU * 10 }}>{_.truncate(overview, { length: 110 })}</Text>
      </View>
    </TouchableOpacity>
  );
}
