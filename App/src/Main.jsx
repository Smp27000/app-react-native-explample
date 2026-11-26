import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Main() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>App de Donaciones</Text>
      <Text style={styles.subtitle}>Proyecto de prueba con React Native + Expo</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bienvenido</Text>
        <Text style={styles.cardText}>
          Usa las pestañas de abajo para navegar entre Donadores, Patrocinadores,
          Donados y Usuarios.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Qué puedes probar aquí</Text>
        <Text style={styles.cardText}>
          Consumo de APIs, listas, formularios, eliminación de registros y
          navegación entre pantallas.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fffbeb",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#78350f",
  },
  subtitle: {
    fontSize: 15,
    color: "#92400e",
    marginTop: 6,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#fcd34d",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#78350f",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: "#92400e",
    lineHeight: 20,
  },
});
