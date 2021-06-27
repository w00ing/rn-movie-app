import React from 'react';
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
  Button,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Swiper from 'react-native-swiper/src';

import { movieApi } from 'src/api/api';
import HorizontalLayoutComponent from 'src/components/HorizontalLayoutComponent';
import HorizontalSiderComponent from 'src/components/HorizontalSiderComponent';
import ListComponent from 'src/components/ListComponent';
import LoadingComponent from 'src/components/LoadingComponent';
import MovieSlideComponent from 'src/components/movie/MovieSlideComponent';
import ScrollContainerComponent from 'src/components/ScrollContainerComponent';
import TitleComponent from 'src/components/TitleComponent';
import VerticalLayoutComponent from 'src/components/VerticalLayoutComponent';
import { LightColors, DarkColors } from 'src/constants/Colors';
import { HEIGHT, WIDTH, WU } from 'src/constants/Layout';

export default function MovieScreen(props) {
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.popular();

    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
  };
  return (
    <ScrollContainerComponent loading={movies.loading} refreshFn={load}>
      <View style={{ marginTop: WU * 30 }}>
        <View style={{ width: '100%', height: HEIGHT / 4, marginBottom: WU * 50 }}>
          <Swiper showsButtons={false} showsPagination={false} autoplay={true} autoplayTimeout={3}>
            {movies?.nowPlaying?.map((movie) => {
              return (
                <MovieSlideComponent
                  key={movie.id}
                  id={movie.id}
                  name={movie.original_title}
                  overview={movie.overview}
                  votes={movie.vote_average}
                  bgImage={movie.backdrop_path}
                  posterImage={movie.poster_path}
                />
              );
            })}
          </Swiper>
        </View>
        <View>
          <HorizontalSiderComponent title={'Popular Movies'}>
            {movies.popular?.map((movie) => (
              <VerticalLayoutComponent
                key={movie.id}
                id={movie.id}
                posterImage={movie.poster_path}
                name={movie.title}
                votes={movie.vote_average}
              />
            ))}
          </HorizontalSiderComponent>

          <ListComponent title="Coming Soon">
            {movies.upcoming.map((movie) => (
              <HorizontalLayoutComponent
                key={movie.id}
                id={movie.id}
                releaseDate={movie.release_date}
                overview={movie.overview}
                posterImage={movie.poster_path}
                name={movie.title}
              />
            ))}
          </ListComponent>
        </View>
      </View>
    </ScrollContainerComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});
