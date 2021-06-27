import React, { useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';

export default function ScrollContainerComponent({ loading, children, contentContainerStyle, refreshFn }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} tintColor="white" />}
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? 'center' : 'flex-start',
        ...contentContainerStyle,
      }}
      showsVerticalScrollIndicator={false}
    >
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
}
