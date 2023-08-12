import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import Header from "../../Component/Header";
import { firebDateToShorty, formatNumber } from "../../util/Helper";
import { usePostStore } from "../../store/mainStore";

const post = () => {
  const params = useLocalSearchParams();

  return (
    <View className="flex-1">
      <Header header={"Post"} backText={"Home"} />
      <View className="py-5 px-6 justify-center flex-1">
        <Text className="font-normal text-xl">{params.content}</Text>
        <View className="mt-6 flex-row space-x-1">
          <Text>{firebDateToShorty(params.dateCreated)}</Text>
          <Text>•</Text>
          <Text>from {params.device}</Text>
          <Text>•</Text>
          <View className="flex-row gap-x-0.5">
            <Text className="font-bold">{formatNumber(params.views)}</Text>
            <Text>Views</Text>
          </View>
        </View>

        <View className="flex-row space-x-2 mt-2">
          <View className="flex-row gap-x-0.5">
            <Text className="font-bold">{formatNumber(params.likes)}</Text>
            <Text>Likes</Text>
          </View>
          <View className="flex-row gap-x-0.5">
            <Text className="font-bold">{formatNumber(params.saves)}</Text>
            <Text>Saves</Text>
          </View>
          <View className="flex-row gap-x-0.5">
            <Text className="font-bold">29</Text>
            <Text>Shares</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default post;
