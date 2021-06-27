import React from 'react';
import { Image } from 'react-native';
import { apiImage } from 'src/api/api';
import { WU } from 'src/constants/Layout';

export default function PosterComponent({ imageUrl }) {
  return <Image style={{ width: WU * 100, height: WU * 160, borderRadius: 4 }} source={{ uri: apiImage(imageUrl) }} />;
}
