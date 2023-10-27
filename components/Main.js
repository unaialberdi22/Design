import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Jugadores from './Jugadores';
import Imagen from './Imagen';
export default function Main({equipos, equipoSeleccionado, jugadorSeleccionado, setJugadorSeleccionado}) {
    
  return (

        <View>
          <Jugadores equipos={equipos} equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={jugadorSeleccionado} setJugadorSeleccionado={setJugadorSeleccionado}></Jugadores>
        </View>
    );
}