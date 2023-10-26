import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Jugadores(Equipo) {

    const jugadores = [
      [
        {nombre: "Unai", imgIndex: 1},
        {nombre: "Mikel", imgIndex: 2},
        {nombre: "Jorge", imgIndex: 3},
        {nombre: "Ander", imgIndex: 4},
      ],
      [
        {nombre: "Randy", imgIndex: 5},
        {nombre: "Richard", imgIndex: 6},
        {nombre: "Michael", imgIndex: 7},
        {nombre: "Paul", imgIndex: 8},
      ],
      [
        {nombre: "Boris", imgIndex: 9},
        {nombre: "Robert", imgIndex: 10},
        {nombre: "Valentino", imgIndex: 11},
        {nombre: "Joachim", imgIndex: 12},
      ],
      [
        {nombre: "Lewis", imgIndex: 13},
        {nombre: "Michael", imgIndex: 14},
        {nombre: "Juan Manuel", imgIndex: 15},
        {nombre: "Keke", imgIndex: 16},
      ],
    ]

    return (
    <View style={styles.main1}>
      <Text style={styles.Text}>{"has seleccionado: " + Equipo}</Text>
      {jugadores[1].map((jugador) => {
        return(
          <Text style={styles.Text}>{jugador.nombre}</Text>
        );
      })}
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
});