import "react-native-gesture-handler";
import React from "react";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import Route from "./src/routes/route";
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    PoppinsRegular: Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Route />;
}
