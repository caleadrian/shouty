import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, usePathname } from "expo-router";

const Tabs = () => {
  const pathname = usePathname();

  return (
    <View className="bg-white flex-row justify-around items-center max-h-14 pt-[3px] border-t-[1px] border-gray-100">
      <Link className="" href={""}>
        <View className="block flex-1 h-14 w-14 items-center justify-center bg-white">
          <Text className={`${pathname == "/" ? "text-red-500" : ""}`}>
            Home
          </Text>
        </View>
      </Link>
      <Link className="mt-0" href={"about"}>
        <View className="flex-1 h-14 w-14 items-center justify-center bg-white">
          <Text className={`${pathname == "/about" ? "text-red-500" : ""}`}>
            About
          </Text>
        </View>
      </Link>
    </View>
  );
};

export default Tabs;
