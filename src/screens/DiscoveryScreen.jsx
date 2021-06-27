import React, { useEffect, useState, useRef } from 'react';
import {
  Alert,
  Animated,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  PanResponder,
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
import { apiImage, movieApi } from 'src/api/api';
import PosterComponent from 'src/components/PosterComponent';

export default function DiscoveryScreen(props) {
  const [topIndex, setTopIndex] = useState(0);
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error,
    });
  };

  const focusNextCard = () => setTopIndex((prev) => prev + 1);

  const position = new Animated.ValueXY();
  const rotationValues = position.x.interpolate({
    inputRange: [WU * -255, 0, WU * 255],
    outputRange: ['-8deg', '0deg', '8deg'],
    extrapolate: 'clamp',
  });

  const secondCardOpacity = position.x.interpolate({
    inputRange: [WU * -255, 0, WU * 255],
    outputRange: [1, 0.5, 1],
    extrapolate: 'clamp',
  });

  const secondCardScale = position.x.interpolate({
    inputRange: [WU * -255, 0, WU * 255],
    outputRange: [1, 0.2, 1],
    extrapolate: 'clamp',
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx >= WU * 100) {
        Animated.spring(position, {
          toValue: { x: WIDTH + 100, y: dy },
          useNativeDriver: true,
        }).start(focusNextCard);
      } else if (dx <= WU * -100) {
        Animated.spring(position, {
          toValue: { x: -WIDTH - 100, y: dy },
          useNativeDriver: true,
        }).start(focusNextCard);
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', paddingTop: WU * 50 }}>
      {movies.results?.map((result, index) => {
        if (index < topIndex) return null;
        if (index === topIndex) {
          return (
            <Animated.View
              style={{
                height: HEIGHT / 1.5,
                width: WIDTH,
                position: 'absolute',
                top: WU * 80,
                zIndex: 1,
                transform: [{ rotate: rotationValues }, ...position.getTranslateTransform()],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Image
                source={{ uri: apiImage(result.poster_path) }}
                style={{ width: '100%', height: '100%', borderRadius: 20 }}
              />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              style={{
                height: HEIGHT / 1.5,
                width: WIDTH,
                position: 'absolute',
                zIndex: -index,
                top: WU * 80,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Image
                source={{ uri: apiImage(result.poster_path) }}
                style={{ width: '100%', height: '100%', borderRadius: 20 }}
              />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              style={{
                height: HEIGHT / 1.5,
                width: WIDTH,
                position: 'absolute',
                zIndex: -index,
                top: WU * 80,
                opacity: 0,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Image
                source={{ uri: apiImage(result.poster_path) }}
                style={{ width: '100%', height: '100%', borderRadius: 20 }}
              />
            </Animated.View>
          );
        }
      })}
    </View>
  );
}
