import React, { useEffect, useState } from 'react';
import { tvApi } from 'src/api/api';
import HorizontalLayoutComponent from 'src/components/HorizontalLayoutComponent';
import HorizontalSiderComponent from 'src/components/HorizontalSiderComponent';
import ListComponent from 'src/components/ListComponent';
import ScrollContainerComponent from 'src/components/ScrollContainerComponent';
import VerticalLayoutComponent from 'src/components/VerticalLayoutComponent';

export default function TvScreen(props) {
  const [shows, setShows] = useState({
    loading: true,
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
    todayError: null,
    thisWeekError: null,
    topRatedError: null,
    popularError: null,
  });

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();

    setShows({
      loading: false,
      today,
      thisWeek,
      topRated,
      popular,
      todayError,
      thisWeekError,
      topRatedError,
      popularError,
    });
  };

  return (
    <ScrollContainerComponent loading={shows.loading} refreshFn={load}>
      <HorizontalSiderComponent title="Popular Shows">
        {shows.popular?.map((show) => (
          <VerticalLayoutComponent
            isTv={true}
            key={show.id}
            id={show.id}
            posterImage={show.poster_path}
            name={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSiderComponent>
      <HorizontalSiderComponent title="Top Rated">
        {shows.topRated?.map((show) => (
          <VerticalLayoutComponent
            isTv={true}
            key={show.id}
            id={show.id}
            posterImage={show.poster_path}
            name={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSiderComponent>
      <ListComponent title="Airing Today">
        {shows.today?.map((show) => (
          <HorizontalLayoutComponent
            isTv={true}
            key={show.id}
            id={show.id}
            overview={show.overview}
            posterImage={show.poster_path}
            name={show.name}
          />
        ))}
      </ListComponent>
    </ScrollContainerComponent>
  );
}
