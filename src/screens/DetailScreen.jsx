import dayjs from 'dayjs';
import _ from 'lodash';
import numeral from 'numeral';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
  Image,
} from 'react-native';
import { apiImage, movieApi, tvApi } from 'src/api/api';
import PosterComponent from 'src/components/PosterComponent';
import ScrollContainerComponent from 'src/components/ScrollContainerComponent';
import TitleComponent from 'src/components/TitleComponent';
import VotesComponent from 'src/components/VotesComponent';
import { LightColors, DarkColors } from 'src/constants/Colors';
import { HEIGHT, WU } from 'src/constants/Layout';

import * as WebBrowser from 'expo-web-browser';
import LinkComponent from 'src/components/detail/LinkComponent';

export default function DetailScreen({
  navigation,
  route: {
    params: { id, name, bgImage, posterImage, votes, overview, isTv },
  },
}) {
  const [detail, setDetail] = useState({
    loading: true,
    result: { name, bgImage, posterImage, overview, votes, spokenLanguages: '', videos: { results: [] } },
  });

  useEffect(() => {
    load();
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  const load = async () => {
    const [getDetail, getDetailError] = isTv ? await tvApi.show(id) : await movieApi.movie(id);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        name: isTv ? getDetail.name : getDetail.title,
        bgImage: getDetail.backdrop_path,
        posterImage: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average,
        spokenLanguages: getDetail.spoken_languages,
        releaseDate: getDetail.release_date,
      },
    });
  };

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <ScrollContainerComponent
      loading={detail.loading}
      refreshFn={load}
      contentContainerStyle={{ paddingBottom: WU * 80 }}
    >
      <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: HEIGHT / 3 }}>
        <Image
          source={{ uri: apiImage(detail.result.bgImage, '-') }}
          style={{ width: '100%', height: '100%', opacity: 0.4, position: 'absolute' }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', top: WU * 30 }}>
          <PosterComponent url={detail.result?.posterImage} />
          <View style={{ width: '50%', marginLeft: WU * 40 }}>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 24, marginBottom: WU * 10 }}>
              {detail.result.name}
            </Text>
            {detail.result.votes ? <VotesComponent votes={detail.result.votes} /> : null}
          </View>
        </View>
      </View>
      {detail.result.overview ? (
        <View style={styles.dataContainer}>
          <Text style={{ color: 'white', opacity: 0.8, fontWeight: '800', marginBottom: WU * 5, marginTop: WU * 30 }}>
            Overview
          </Text>
          <Text style={styles.dataValue}>{detail.result.overview}</Text>
        </View>
      ) : null}
      {detail.loading && <ActivityIndicator color="white" style={{ marginTop: WU * 30 }} size="small" />}
      {detail.result.spokenLanguages && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>Languages</Text>
          <Text style={styles.dataValue}>{detail.result.spokenLanguages.map((l) => l.name).join(', ')}</Text>
        </View>
      )}
      {detail.result.releaseDate && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>Release Date</Text>
          <Text style={styles.dataValue}>{dayjs(detail.result.releaseDate).format('YYYY-MM-DD')}</Text>
        </View>
      )}
      {detail.result.status && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>Status</Text>
          <Text style={styles.dataValue}>{detail.result.status}</Text>
        </View>
      )}
      {detail.result.revenue && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>Revenue</Text>
          <Text style={styles.dataValue}>💰 {numeral(detail.result.revenue).format()}</Text>
        </View>
      )}
      {detail.result.runtime && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>Runtime</Text>
          <Text style={styles.dataValue}>{detail.result.runtime} min</Text>
        </View>
      )}
      {detail.result.first_air_date && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>First Air Date</Text>
          <Text style={styles.dataValue}>{dayjs(detail.result.first_air_date).format('YYYY-MM-DD')}</Text>
        </View>
      )}
      {detail.result.genres && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>Genres</Text>
          <Text style={styles.dataValue}>{detail.result.genres.map((l) => l.name).join(', ')}</Text>
        </View>
      )}
      {detail.result.number_of_episodes && detail.result.number_of_seasons && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>Seasons / Episodes</Text>
          <Text style={styles.dataValue}>
            {detail.result.number_of_seasons} / {detail.result.number_of_episodes}
          </Text>
        </View>
      )}

      {detail.result.imdb_id && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>Links</Text>
          <LinkComponent
            onPress={() => openBrowser(`https://www.imdb.com/title/${detail.result.imdb_id}`)}
            icon="imdb"
            text="IMDB Page"
          />
        </View>
      )}
      {detail.result.videos?.results?.length !== 0 && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>Videos</Text>
          {detail.result.videos?.results?.map((video) => (
            <View style={{ marginTop: WU * 5 }}>
              <LinkComponent
                onPress={() => openBrowser(`https://www.youtube.com/watch?v=${video.key}`)}
                icon="youtube-play"
                text={video.name}
                key={video.id}
              />
            </View>
          ))}
        </View>
      )}
    </ScrollContainerComponent>
  );
}

const styles = StyleSheet.create({
  dataContainer: { paddingHorizontal: WU * 30, marginTop: WU * 30 },
  dataName: { color: 'white', opacity: 0.8, fontWeight: '800', marginBottom: WU * 5 },
  dataValue: { color: 'white', opacity: 0.8, fontWeight: '500' },
});
