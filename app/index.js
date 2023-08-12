import React, { useState, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  RefreshControl,
} from "react-native";
import PostCard from "../Component/PostCard";
import useMainStore, { usePostStore } from "../store/mainStore";

const Home = () => {
  const [flatListIndex, setFlatListIndex] = useState(0);
  const flatListRef = useRef(null);
  const { shouts, fetchShouts, getShoutsLength, isFetchingShouts } =
    usePostStore((state) => state);

  const { isInitiallyLoaded, setIsInitiallyLoaded } = useMainStore(
    (state) => state
  );

  useEffect(() => {
    if (!isInitiallyLoaded) {
      fetchShouts();
      getShoutsLength();
      setIsInitiallyLoaded(true);
    }
  }, []);

  const ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#e1e1e1",
        }}
      />
    );
  };

  const onRefresh = () => {
    fetchShouts();
    getShoutsLength();
    console.log("refresh");
  };

  if (isFetchingShouts) {
    return (
      <View className="flex-1 justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  const Scroll = (index) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
      });
    }
  };

  return (
    <>
      <FlatList
        initialScrollIndex={flatListIndex}
        className="bg-gray-100"
        ref={flatListRef}
        data={shouts}
        ItemSeparatorComponent={ListViewItemSeparator}
        enableEmptySections={true}
        renderItem={({ item }) => <PostCard {...item} />}
        refreshControl={
          <RefreshControl refreshing={isFetchingShouts} onRefresh={onRefresh} />
        }
      />
    </>
  );
};

export default Home;
