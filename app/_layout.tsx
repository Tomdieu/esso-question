import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerTitle:"Esso Question"}} />
      <Stack.Screen name="questions" />
    </Stack>
  );
}
