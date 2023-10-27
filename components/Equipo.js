import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default function Equipo({equipos, equipoSeleccionado, onEquipoSeleccionado}) {

  return (
    <View style={styles.header}>
      {Object.keys(equipos).map((nombreEquipo, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onEquipoSeleccionado(nombreEquipo)}
        >
          <Text style={[
            styles.Text,
            nombreEquipo === equipoSeleccionado ? styles.selectedNombreEquipo : null
          ]}>
            {nombreEquipo}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  Text: {
    margin: 10,
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 30,
    fontWeight: 'normal',
  },
  selectedNombreEquipo: {
    backgroundColor: 'red',
  },
});
