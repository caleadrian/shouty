import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Device from "expo-device";
import Moment from "react-moment";
import { router, useRouter } from "expo-router";

const PostCard = (item) => {
  const date = new Date();
  const router = useRouter();

  const postOnClick = () => {
    router.push({
      pathname: "post",
      params: item,
    });
  };
  return (
    <TouchableOpacity
      onPress={() => postOnClick()}
      activeOpacity={true}
      className="bg-white m-4 p-5 rounded-md min-h-[200px] shadow-sm overflow-hidden flex justify-between"
    >
      <View className="">
        <Text className="font-medium text-xl">{item.content}</Text>
      </View>

      <View className="flex-row gap-x-5  mt-3">
        <TouchableOpacity className="flex-row">
          <Text className="mr-1">Like</Text>
          <Text>1k</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row">
          <Text>Share</Text>
        </TouchableOpacity>
        <Text>{item.deviceName}</Text>
        <Moment element={Text} fromNow>
          {date}
        </Moment>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
