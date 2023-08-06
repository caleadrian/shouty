import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

const post = () => {
  const params = useLocalSearchParams();
  const { back } = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Link href={back}>Back</Link>
      <Text>{params.content}</Text>
    </View>
  );
};

export default post;
