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
  RefreshControl,
} from 'react-native';

import _ from 'lodash';
import dayjs from 'dayjs';

import { LightColors, DarkColors } from 'src/constants/Colors';
import DefaultStyles from 'src/constants/DefaultStyles';
import { WIDTH, HEIGHT, DEFAULT_MARGIN, WU } from 'src/constants/Layout';

export default function ScrollContainerComponent({ loading, children, contentContainerStyle, refreshFn }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} tintColor="white" />}
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? 'center' : 'flex-start',
        ...contentContainerStyle,
      }}
      showsVerticalScrollIndicator={false}
    >
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
}
