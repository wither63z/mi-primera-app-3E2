import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>William Ariel Ortiz Teran</Text>
      <Text style={styles.subtitle}>Curso: 3E2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fef3c7",
  },
  title: {
    color: "#1f2937",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#92400e",
    fontSize: 22,
    marginTop: 12,
  },
});
