import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { apiImage } from 'src/api/api';
import { WU } from 'src/constants/Layout';
import PosterComponent from '../PosterComponent';
import VotesComponent from '../VotesComponent';

export default function MovieSlideComponent({ id, name, overview, votes, bgImage, posterImage }) {
  const navigation = useNavigation();

  const goToDetailScreen = () => {
    navigation.navigate('DetailScreen', { id, name, overview, votes, bgImage, posterImage });
  };

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Image
        source={{ uri: apiImage(bgImage) }}
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.4,
          position: 'absolute',
        }}
      />
      <View style={{ height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <PosterComponent poster={posterImage} />
        <View style={{ width: '50%', alignItems: 'flex-start' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 19, marginBottom: WU * 7 }}>
            {_.truncate(name, { length: 30 })}
          </Text>
          <VotesComponent votes={votes} />
          <Text style={{ color: 'rgb(220, 220, 220)', fontWeight: '500', fontSize: 14 }}>
            {_.truncate(overview, { length: 110 })}
          </Text>
          <TouchableOpacity onPress={goToDetailScreen}>
            <View
              style={{
                backgroundColor: '#E74C3C',
                marginTop: WU * 10,
                paddingVertical: WU * 7,
                paddingHorizontal: WU * 10,
                borderRadius: 3,
              }}
            >
              <Text style={{ color: 'white' }}>See details</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
