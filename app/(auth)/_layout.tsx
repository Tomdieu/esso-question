import { useAuth } from "@/store/user";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {

  const {user} = useAuth()
  if(user){
    return <Redirect href={"/(root)/(app)/(tabs)/"}/>
  }
  return (
    <Stack screenOptions={{ headerShown: false,animation:"slide_from_right" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
