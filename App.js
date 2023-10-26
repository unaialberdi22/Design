import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Imagen from './components/Imagen';
import Main from './components/Main';
// import Foto from './assets/imagen.jpg';

export default function App() {

  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);

  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.main}>
        <Main equipo={equipoSeleccionado}></Main>
        <Imagen></Imagen>
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
