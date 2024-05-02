import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "nunito-regular": require("./assets/fonts/NunitoSans_7pt-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/NunitoSans_7pt-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

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
