import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, usePathname } from "expo-router";
import Icon from "react-native-vector-icons/Octicons";

const Tabs = ({ isShow = false }) => {
  const pathname = usePathname();

  const TABS = [
    {
      pathname: "/",
      href: "",
      label: "Home",
      icon: "home",
    },
    {
      pathname: "/search",
      href: "/search",
      label: "Search",
      icon: "search",
    },
    {
      pathname: "/create-post",
      href: "/create-post",
      label: "Post",
      icon: "plus-circle",
    },
    {
      pathname: "/bookmark",
      href: "/bookmark",
      label: "Bookmark",
      icon: "bookmark",
    },
    {
      pathname: "/premium",
      href: "/premium",
      label: "Premium",
      icon: "star",
    },
  ];

  return (
    <>
      {isShow && (
        <View className="bg-white flex-row justify-around items-center max-h-14 pt-[3px] border-t-[1px] border-gray-100">
          {TABS.map((tab) => (
            <Link key={tab.href} className="mt-0" href={tab.href}>
              <View className="flex-1 h-14 w-14 items-center justify-center bg-white">
                <Text>
                  <Icon
                    style={{ opacity: pathname == tab.pathname ? 1 : 0.4 }}
                    name={tab.icon}
                    size={28}
                  />
                </Text>
              </View>
            </Link>
          ))}
        </View>
      )}
    </>
  );
};

export default Tabs;
