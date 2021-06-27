import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { WU } from 'src/constants/Layout';

export default function LinkComponent({ onPress, text, icon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome name={icon} color="white" size={22} />
        <Text style={{ color: 'white', opacity: 0.8, marginLeft: WU * 5, fontWeight: 'bold' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
