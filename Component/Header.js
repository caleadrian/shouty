import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Octicons";

const Header = ({
  backText,
  header,
  showRightBtn = false,
  rightBtnText,
  rightBtnFunction,
}) => {
  const { back } = useRouter();

  return (
    <View className="bg-transparent h-10 flex-row justify-between items-center px-3">
      <View className="w-28">
        <TouchableOpacity
          onPress={back}
          className="flex-row items-center gap-x-2"
        >
          <Icon name="chevron-left" size={28} color={"#4F8EF7"} />
          <Text className="text-lg text-[#4F8EF7]">{backText}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-lg font-semibold">{header}</Text>
      </View>
      <View className="w-28">
        {showRightBtn && (
          <TouchableOpacity
            onPress={rightBtnFunction}
            className=" flex-1 items-end justify-center"
          >
            <Text className="text-lg text-sky-500">{rightBtnText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
