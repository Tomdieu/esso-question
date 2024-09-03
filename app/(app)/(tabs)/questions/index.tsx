import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';; // You might need to install this: npx expo install @expo/vector-icons

// Define theme colors and fonts
const THEME_COLORS = {
  primary: "#f4511e",
  background: "#fff",
  text: "#333",
};

const FONT_FAMILY = {
  regular: "InterRegular",
  medium: "InterMedium",
  bold: "InterBold",
};

type LinkType = {
  label: string;
  route: Href<string | object>;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  // icon: React.ComponentProps<typeof IoniconsType>["name"];
};

const links: LinkType[] = [
  { label: "Problème", route: "/questions/problem", iconName: 'alert-circle-outline' }, // Updated label and icon name 
  { label: "Solution", route: "/questions/solution", iconName: 'bulb-outline' },
  { label: "Résultat", route: "/questions/resultat", iconName: 'checkmark-circle-outline' }, 
  { label: "Outil de développement", route: "/questions/outil_developement", iconName: 'code-slash-outline' }, 
  { label: "Voie de consommation", route: "/questions/voie_consomation", iconName: 'trending-up-outline' },
  { label: "Forme de capitalisation", route: "/questions/forme_capitatlisation", iconName: 'cash-outline' },
  { label: "Modèle architectural", route: "/questions/modele_architectural", iconName: 'layers-outline' },
  { label: "Structurateur", route: "/questions/structurateur", iconName: 'build-outline' },
  { label: "Idée", route: "/questions/idee", iconName: 'bulb-outline' },
  { label: "Mode de pensée", route: "/questions/mode_de_pensee", iconName: 'briefcase' },
];

const Questions = () => {
  return (
    <SafeAreaView className="flex flex-1 h-full bg-white">
      <View style={styles.container} className="p-2">
        <Text style={styles.title} className="py-2">Ideogramme</Text>
        <FlatList
          data={links}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <Link href={item.route} asChild>
              <TouchableOpacity style={styles.linkButton} className="bg-blue-500">
                <View style={styles.iconContainer}>
                  <Ionicons name={item.iconName} size={32} color="white" />
                </View>
                <Text style={styles.linkButtonText}>{item.label}</Text>
              </TouchableOpacity>
            </Link>
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    </SafeAreaView>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.background,
  },
  title: {
    fontSize: 32,
    fontFamily: FONT_FAMILY.bold,
    color: THEME_COLORS.text,
  },

  row: {
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 10,
  },

  linkButton: {
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    // marginVertical: 5,
    alignItems: "center", 
  },

  linkButtonText: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.medium,
    textAlign: "center",
    flexWrap: "wrap",
    color: 'white', // Set text color to white
  },
  iconContainer: {
    marginBottom: 8, 
  },
});