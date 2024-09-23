import { IdeoGrammeType } from "@/schema/index.schema";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

interface IdeoGrammeTableProps {
  ideogram: IdeoGrammeType;
}

const IdeoGrammeTable: React.FC<IdeoGrammeTableProps> = ({ ideogram }) => {
  // Define the table headers
  const tableHead = [
    "Problems",
    "Solutions",
    "Results",
    "Tools Development",
    "Consumption Ways",
    "Capitalization Forms",
    "Architectural Models",
    "Structurers",
    "Ideas",
    "Modes of Thinking",
  ];

  // Prepare data for the table
  const tableData = [
    ideogram.problems.map((p) => p.problem).join(", "),
    ideogram.solutions.map((s) => s.solution).join(", "),
    ideogram.resultats.map((r) => r.resultat).join(", "),
    ideogram.outilsDevelopement
      .map((o) => o.outil_developement.join(", "))
      .join(", "),
    ideogram.voiesConsomation
      .map((v) => v.voie_consomation.join(", "))
      .join(", "),
    ideogram.formesCapitatlisation
      .map((f) => f.forme_capitatlisation)
      .join(", "),
    ideogram.modelesArchitectural.map((m) => m.modele_architectural).join(", "),
    ideogram.structurateurs.map((s) => s.structurateur).join(", "),
    ideogram.idees.map((i) => i.idee).join(", "),
    ideogram.modesDePensee.map((m) => m.mode_de_pensee).join(", "),
  ];

  // Convert the table data into a format suitable for Rows
  const formattedData = [tableData];

  return (
    <View className="p-4 bg-white">
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={tableHead}
          style={styles.container}
          textStyle={styles.head}
        />
        <Rows data={formattedData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});

export default IdeoGrammeTable;
