import { StyleSheet, Text, View } from 'react-native';

export default function PatrocinadoresScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patrocinadores</Text>
      <View style={styles.card}>
        <Text style={styles.texto}>Pantalla de prueba para patrocinadores.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbeb",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#78350f",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#fcd34d",
    borderRadius: 10,
    padding: 16,
  },
  texto: {
    fontSize: 14,
    color: "#92400e",
  },
});
