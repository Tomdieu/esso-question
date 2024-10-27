import React from "react";
import { router, Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { X } from "lucide-react-native";

type Props = {};

const StackLayout = (props: Props) => {
  return (
    <React.Fragment>
      <StatusBar />
      <Stack
        screenOptions={{
          animation: "ios",
          // headerShown: false,
          animationDuration: 300,
          animationTypeForReplace: "push",
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Question",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="results"
          options={{
            headerShown: false,
          }}
        />
        {/*  */}

        <Stack.Screen
          name="problem"
          options={{
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() => router.push("/(app)/(tabs)/questions")}
              >
                <X size={24} color={tintColor} />
              </TouchableOpacity>
            ),
            headerTitle: "Problème",
            presentation:"modal"
          }}

        />
        <Stack.Screen
          name="solution"
          options={{
            headerTitle: "Solution",
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() => router.push("/(app)/(tabs)/questions")}
              >
                <X size={24} color={tintColor} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="resultat"
          options={{
            headerTitle: "Résultat",
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() => router.push("/(app)/(tabs)/questions")}
              >
                <X size={24} color={tintColor} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="outil_developement"
          options={{
            headerTitle: "Outil de developement",
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() => router.push("/(app)/(tabs)/questions")}
              >
                <X size={24} color={tintColor} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="voie_consomation"
          options={{
            headerTitle: "Voie de consommation",
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() =>
                  router.push("/(app)/(tabs)/questions")
                }
              >
                <X size={24} color={tintColor} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="forme_capitatlisation"
          options={{
            headerTitle: "Forme de capitalisation",
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() =>
                  router.push("/(app)/(tabs)/questions")
                }
              >
                <X size={24} color={tintColor} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="modele_architectural"
          options={{
            headerTitle: "Modèle architectural",
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() =>
                  router.push("/(app)/(tabs)/questions")
                }
              >
                <X size={24} color={tintColor} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="structurateur"
          options={{
            headerTitle: "Structurateur",
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() =>
                  router.push("/(app)/(tabs)/questions")
                }
              >
                <X size={24} color={tintColor} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="idee"
          options={{
            headerTitle: "Idée",
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() => router.push("/(app)/(tabs)")}
              >
                <X size={24} color={tintColor} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="mode_de_pensee"
          options={{
            headerTitle: "Mode de pensée",
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() => router.push("/(app)/(tabs)/questions")}
              >
                <X size={24} color={tintColor} />
              </TouchableOpacity>
            ),
          }}
        />

      </Stack>
    </React.Fragment>
  );
};

export default StackLayout;
