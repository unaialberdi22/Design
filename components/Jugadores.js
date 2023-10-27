import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default function Jugadores({equipos, equipoSeleccionado, jugadorSeleccionado, setJugadorSeleccionado}) {
  
  const jugadores = equipos[equipoSeleccionado];

  return (
    <View style={styles.main1}>
      {jugadores.map((jugador, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setJugadorSeleccionado(index)}
        >
          <Text style={[
            styles.Text,
            index === jugadorSeleccionado ? styles.selectedNombreEquipo : null
          ]}>
            {jugador.nombre}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    main1:{
        borderWidth: 2,
        flex: "fitContent",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
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