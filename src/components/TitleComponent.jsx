import React from 'react';
import { Text } from 'react-native';
import { WU } from 'src/constants/Layout';

export default function TitleComponent({ title }) {
  return <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginLeft: WU * 30 }}>{title}</Text>;
}
