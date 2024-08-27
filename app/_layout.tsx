import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { AppRegistry } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { NativeBaseProvider } from "native-base";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    InterBlack: require("../assets/fonts/Inter-Black.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{animation:"ios",headerShown:false}}>
      <Stack.Screen name="index" options={{ headerShown:false }} />
      <Stack.Screen name="(auth)" options={{headerShown:false}} />
      <Stack.Screen name="questions" options={{presentation:"modal"}} />
    </Stack>
  );
}

AppRegistry.registerComponent("esso-question", () => RootLayout);
