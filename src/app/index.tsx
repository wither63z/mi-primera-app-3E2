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
    backgroundColor: "#1e3a5f",
  },
  title: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#facc15",
    fontSize: 22,
    marginTop: 12,
  },
});
