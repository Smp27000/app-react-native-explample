import { Pressable, StyleSheet, Text, View } from "react-native";

// Tarjeta que muestra un donado y permite eliminarlo
export default function CardDonado({ item, onEliminar }) {
  return (
    <View style={styles.card}>
      <View style={styles.textos}>
        <Text style={styles.nombre}>{item.name}</Text>
        <Text style={styles.descripcion}>{item.description}</Text>
      </View>

      <Pressable style={styles.boton} onPress={() => onEliminar(item._id)}>
        <Text style={styles.botonTexto}>Eliminar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#fcd34d",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  textos: {
    flex: 1,
    paddingRight: 8,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#78350f",
  },
  descripcion: {
    fontSize: 14,
    color: "#92400e",
    marginTop: 2,
  },
  boton: {
    backgroundColor: "#f59e0b",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  botonTexto: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
