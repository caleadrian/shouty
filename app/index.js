import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  RefreshControl,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-web";
import PostCard from "../Component/PostCard";

const Home = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    fetch("https://mocki.io/v1/9b50efbd-e848-48cc-8e87-e04599ec89a7")
      .then((response) => response.json())
      .then((responseJson) => {
        setRefreshing(false);
        setDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
    GetData();
    console.log("refresh");
  };

  if (refreshing) {
    return (
      <View className="flex-1 justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <FlatList
        className="bg-gray-100"
        data={dataSource}
        ItemSeparatorComponent={ListViewItemSeparator}
        enableEmptySections={true}
        renderItem={({ item }) => <PostCard {...item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </>
  );
};

export default Home;
