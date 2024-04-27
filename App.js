import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "nunito-regular": require("./assets/fonts/NunitoSans_7pt-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/NunitoSans_7pt-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Home />;
}
