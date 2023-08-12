import { useState, useEffect } from "react";
import { Slot, router } from "expo-router";
import { SafeAreaView, View } from "react-native";
import Tabs from "../Component/Tabs";

export default function () {
  return (
    <SafeAreaView className="bg-transparent">
      <View className="h-full justify-between">
        <Slot />
        <Tabs isShow={true} />
      </View>
    </SafeAreaView>
  );
}
