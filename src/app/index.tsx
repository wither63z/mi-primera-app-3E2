import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Will</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff", // Fondo blanco limpio
  },
  text: {
    fontSize: 48,             // Tamaño de letra grande como en tu imagen
    fontWeight: "bold",       // Letra en negrita
    color: "#000000",         // Color negro
  },
});
