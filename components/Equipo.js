import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import Jugadores from './Jugadores';

export default function Equipo(Equipo) {
  const equipos = ["Ferrari", "Porsche", "BMW", "Mercedes"];
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);

  const handleEquipoClick = (equipo) => {
    setEquipoSeleccionado(equipo);
  };

  return (
    <View style={styles.header}>
      {equipos.map((equipo) => {
        return (
          <Text style={styles.Text} key={equipo} onPress={() => handleEquipoClick(equipo)}>{equipo}</Text>
        );
        })}
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
});
