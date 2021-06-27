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

export default function VotesComponent({ votes }) {
  return (
    <Text style={{ color: 'rgb(220, 220, 220)', fontWeight: '500', fontSize: 12, marginBottom: WU * 7 }}>
      ⭐️ {votes} / 10
    </Text>
  );
}
