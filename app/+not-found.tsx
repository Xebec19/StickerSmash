import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View>
        <Link href="/">Go back to Home Screen</Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
