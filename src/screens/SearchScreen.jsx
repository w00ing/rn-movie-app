import React from 'react';
import { useState } from 'react';
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
  ScrollView,
} from 'react-native';
import { movieApi, tvApi } from 'src/api/api';
import SearchInputComponent from 'src/components/search/SearchInputComponent';
import HorizontalSiderComponent from 'src/components/HorizontalSiderComponent';
import { LightColors, DarkColors } from 'src/constants/Colors';
import HorizontalLayoutComponent from 'src/components/HorizontalLayoutComponent';
import VerticalLayoutComponent from 'src/components/VerticalLayoutComponent';
import ScrollContainerComponent from 'src/components/ScrollContainerComponent';
import { WU } from 'src/constants/Layout';

export default function SearchScreen() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    moviesError: null,
    showsError: null,
  });

  const onChange = (text) => setKeyword(text);
  const search = async () => {
    if (keyword === '') return;
    const [movies, moviesError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);

    setResults({
      movies,
      shows,
      moviesError,
      showsError,
    });
  };

  return (
    <ScrollContainerComponent
      loading={false}
      contentContainerStyle={{
        paddingTop: WU * 10,
      }}
      refreshFn={search}
    >
      <SearchInputComponent
        placeholder={'Search by a keyword...'}
        onChange={onChange}
        onSubmit={search}
        value={keyword}
      />
      {results.movies?.length !== 0 && (
        <HorizontalSiderComponent title="Movie results">
          {results.movies?.map((movie) => (
            <VerticalLayoutComponent
              key={movie.id}
              id={movie.id}
              votes={movie.vote_average}
              name={movie.title}
              posterImage={movie.poster_path}
            />
          ))}
        </HorizontalSiderComponent>
      )}
      {results.shows?.length !== 0 && (
        <HorizontalSiderComponent title="TV results">
          {results.shows?.map((show) => (
            <VerticalLayoutComponent
              isTv={true}
              key={show.id}
              id={show.id}
              votes={show.vote_average}
              name={show.name}
              posterImage={show.poster_path}
            />
          ))}
        </HorizontalSiderComponent>
      )}
    </ScrollContainerComponent>
  );
}
