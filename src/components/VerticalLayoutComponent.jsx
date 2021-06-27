import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { WU } from 'src/constants/Layout';
import PosterComponent from './PosterComponent';
import VotesComponent from './VotesComponent';

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
