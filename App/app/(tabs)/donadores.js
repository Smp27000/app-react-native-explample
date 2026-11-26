import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function DonadoresScreen() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => setPersonajes(data.results))
      .catch(error => console.log("Error al pedir datos:", error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donadores</Text>
      <FlatList
        data={personajes}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.name}</Text>
            <Text style={styles.texto}>{item.species}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.texto}>Cargando...</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbeb",
    paddingTop: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#78350f",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#fcd34d",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#78350f",
  },
  texto: {
    fontSize: 14,
    color: "#92400e",
  },
});
