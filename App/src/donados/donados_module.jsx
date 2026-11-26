import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import axios from "axios";
import CardDonado from "./components/listdonados";

// URL base de la API (viene del archivo .env)
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export default function DonadosModule() {
  const [donados, setDonados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Datos del formulario para añadir
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // 1. Traer la lista desde la API
  async function getData() {
    try {
      setCargando(true);
      setError(null);
      const respuesta = await axios.get(`${API_URL}/categories`);
      setDonados(respuesta.data.data);
    } catch (e) {
      setError("No se pudieron cargar los donados.");
      console.log(e);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // 2. Eliminar un registro
  async function eliminar(id) {
    try {
      await axios.delete(`${API_URL}/categories/${id}`);
      getData();
    } catch (e) {
      console.log(e);
    }
  }

  // 3. Crear un registro nuevo
  async function crear() {
    if (!name.trim()) return; // el nombre es obligatorio
    try {
      await axios.post(`${API_URL}/categories`, { name, description });
      setName("");
      setDescription("");
      setModalVisible(false);
      getData();
    } catch (e) {
      console.log(e);
    }
  }

  // Mientras carga
  if (cargando) {
    return (
      <View style={styles.centrado}>
        <ActivityIndicator color="#b45309" size="large" />
        <Text style={styles.texto}>Cargando donados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Donados</Text>
          <Text style={styles.contador}>{donados.length} registros</Text>
        </View>

        <Pressable style={styles.botonAgregar} onPress={() => setModalVisible(true)}>
          <Text style={styles.botonAgregarTexto}>+ Añadir</Text>
        </Pressable>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      {/* Lista */}
      <FlatList
        data={donados}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <CardDonado item={item} onEliminar={eliminar} />
        )}
        ListEmptyComponent={
          <Text style={styles.texto}>No hay donados registrados.</Text>
        }
      />

      {/* Ventana para añadir */}
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalFondo}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Añadir donado</Text>

            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Bebidas"
              placeholderTextColor="#a8a29e"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Bebidas típicas"
              placeholderTextColor="#a8a29e"
              value={description}
              onChangeText={setDescription}
            />

            <View style={styles.modalBotones}>
              <Pressable
                style={[styles.botonModal, styles.botonCancelar]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.botonCancelarTexto}>Cancelar</Text>
              </Pressable>

              <Pressable
                style={[styles.botonModal, styles.botonGuardar]}
                onPress={crear}
              >
                <Text style={styles.botonGuardarTexto}>Guardar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbeb",
    paddingTop: 48,
  },
  centrado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffbeb",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#78350f",
  },
  contador: {
    fontSize: 14,
    color: "#92400e",
    marginTop: 2,
  },
  botonAgregar: {
    backgroundColor: "#b45309",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  botonAgregarTexto: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  texto: {
    fontSize: 14,
    color: "#92400e",
    textAlign: "center",
    marginTop: 12,
  },
  error: {
    fontSize: 14,
    color: "#b91c1c",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  modalFondo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 24,
  },
  modalCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#78350f",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#78350f",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fcd34d",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#1c1917",
    marginBottom: 14,
  },
  modalBotones: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  botonModal: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  botonCancelar: {
    backgroundColor: "#f5f5f4",
  },
  botonCancelarTexto: {
    color: "#57534e",
    fontWeight: "bold",
  },
  botonGuardar: {
    backgroundColor: "#b45309",
  },
  botonGuardarTexto: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
