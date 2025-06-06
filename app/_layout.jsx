import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { CreateTripContext } from "../context/CreateTripContext";
import { useState,useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/Colors";



SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const [loaded, error] =  useFonts({
      outfit: require("../assets/fonts/Outfit-Regular.ttf"),
      "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
      "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
    });


      useEffect(() => {
        if (error) throw error;
        if (!loaded) SplashScreen.hideAsync();
        // if (!loaded && !error) return null;
      }, [loaded, error]);




    const [tripData,setTripData] = useState()

   
  return (
    <>
      <CreateTripContext.Provider value={{ tripData, setTripData }}>
        <Stack
          screenOptions={{
            headerShown: false,
            
          }}
        >
          {/* <Stack.Screen name="index" options={{
        headerShown:false
      }} /> */}
          <Stack.Screen name="(tabs)" />
        </Stack>
      </CreateTripContext.Provider>
      <StatusBar style="inverted" />
    </>
  );
}
 