import React from 'react';
import { ScrollView, View } from 'react-native';
import { WU } from 'src/constants/Layout';
import TitleComponent from './TitleComponent';

export default function HorizontalSiderComponent({ title, children }) {
  return (
    <View>
      <TitleComponent title={title} />
      <ScrollView
        horizontal
        style={{ marginTop: WU * 20, marginBottom: 40 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: WU * 30 }}
      >
        {children}
      </ScrollView>
    </View>
  );
}
