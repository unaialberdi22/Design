import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Equipo from './Equipo';

export default function Header({equipos, equipoSeleccionado, onEquipoSeleccionado}) {
    return (
      <View>
        <Equipo equipos={equipos} equipoSeleccionado={equipoSeleccionado} onEquipoSeleccionado={onEquipoSeleccionado}></Equipo>
      </View>
    );
}
