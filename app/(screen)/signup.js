import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View className="p-10 space-y-2">
      {loading && <Text>Loading</Text>}
      <TextInput
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        className="border-2 px-3 py-2 rounded-md text-lg"
        autoCapitalize={"none"}
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        placeholder="Password"
        className="border-2 px-3 py-2 rounded-md text-lg"
        autoCapitalize={"none"}
      />
      <TouchableOpacity className="bg-blue-500 text-white p-3 rounded-md flex items-center">
        <Text className="text-lg">Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default signup;
