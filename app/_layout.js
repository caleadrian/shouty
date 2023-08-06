import { Slot } from "expo-router";
import { SafeAreaView, View } from 'react-native';
import Tabs from "./tabs";

export default function () {
  return (
    <SafeAreaView>
      <View className="h-full justify-between">
        <Slot />
        <Tabs ></Tabs>
      </View>
    </SafeAreaView>
  );
}