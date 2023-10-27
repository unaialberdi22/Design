import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Imagen from './components/Imagen';
import Main from './components/Main';
import { useState } from 'react';
// import Foto from './assets/imagen.jpg';

export default function App() {

  const equipos = {
    Ferrari: [
      {nombre: "Unai", imgIndex: 1},
      {nombre: "Mikel", imgIndex: 2},
      {nombre: "Jorge", imgIndex: 3},
      {nombre: "Ander", imgIndex: 4},
    ],
    Porsche:[
      {nombre: "Randy", imgIndex: 5},
      {nombre: "Richard", imgIndex: 6},
      {nombre: "Michael", imgIndex: 7},
      {nombre: "Paul", imgIndex: 8},
    ],
    BMW:[
      {nombre: "Boris", imgIndex: 9},
      {nombre: "Robert", imgIndex: 10},
      {nombre: "Valentino", imgIndex: 11},
      {nombre: "Joachim", imgIndex: 12},
    ],
    Mercedes:[
      {nombre: "Lewis", imgIndex: 13},
      {nombre: "Michael", imgIndex: 14},
      {nombre: "Juan Manuel", imgIndex: 15},
      {nombre: "Keke", imgIndex: 16},
    ],
  }

  const [equipoSeleccionado, setEquipoSeleccionado] = useState('Ferrari');
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(0);

  return (
    <View style={styles.container}>
      <Header equipos= {equipos} equipoSeleccionado={equipoSeleccionado} onEquipoSeleccionado={setEquipoSeleccionado}></Header>
      <View style={styles.main}>
        <Main equipos={equipos} equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={jugadorSeleccionado} setJugadorSeleccionado={setJugadorSeleccionado}></Main>
        <Imagen equipos={equipos} equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={jugadorSeleccionado}></Imagen>
      </View>
      <Footer></Footer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  main:{
    width: "200vh",
    borderWidth: 2,
    flex: "auto",
    flexDirection: 'row',
  },
});
