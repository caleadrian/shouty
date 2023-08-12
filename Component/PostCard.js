import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Octicons";

const PostCard = (item) => {
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
      className="bg-white m-4 p-5 rounded-md min-h-[170px] shadow-sm overflow-hidden flex justify-between"
    >
      <View className="">
        <Text className="font-base text-xl">{item.content}</Text>
      </View>

      <View className="flex-row gap-x-5 mt-3 items-center">
        <TouchableOpacity className="flex-row items-center">
          <Icon name="heart" size={18}></Icon>
          <Text className="ml-1.5">Like</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center">
          <Icon name="bookmark" size={18}></Icon>
          <Text className="ml-1.5 ">Save</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center">
          <Icon name="share" size={18}></Icon>
          <Text className="ml-1.5 ">Share</Text>
        </TouchableOpacity>
        <Text>from {item.device}</Text>
        {/* <Moment element={Text} fromNow>
          {date} {Device.modelName}
        </Moment> */}
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
