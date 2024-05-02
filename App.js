import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Home from "./screens/home";
import Navigator from "./routes/homeStack";

const getFonts = async () => {
  try {
    await Font.loadAsync({
      "nunito-regular": require("./assets/fonts/NunitoSans_7pt-Regular.ttf"),
      "nunito-bold": require("./assets/fonts/NunitoSans_7pt-Bold.ttf"),
    });
  } catch (error) {
    console.error("Error loading fonts:", error);
  }
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  console.log("App component rendering");

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
