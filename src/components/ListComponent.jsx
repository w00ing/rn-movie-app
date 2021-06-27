import React from 'react';
import { View } from 'react-native';
import { WU } from 'src/constants/Layout';
import TitleComponent from './TitleComponent';

export default function ListComponent({ title, children }) {
  return (
    <View>
      <TitleComponent title={title} />
      <View style={{ width: '100%', marginTop: WU * 20 }}>{children}</View>
    </View>
  );
}
