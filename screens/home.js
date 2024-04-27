import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "nunito-bold" }}>Home Screen</Text>
      <Text style={{ fontFamily: "nunito-regular" }}>This is regular text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
