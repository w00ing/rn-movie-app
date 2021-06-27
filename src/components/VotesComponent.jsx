import React from 'react';
import { Text } from 'react-native';
import { WU } from 'src/constants/Layout';

export default function VotesComponent({ votes }) {
  return (
    <Text style={{ color: 'rgb(220, 220, 220)', fontWeight: '500', fontSize: 12, marginBottom: WU * 7 }}>
      ⭐️ {votes} / 10
    </Text>
  );
}
