import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// import Foto from './assets/imagen.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Text}>Equipo 1</Text>
        <Text style={styles.Text}>Equipo 2</Text>
        <Text style={styles.Text}>Equipo 3</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.main1}>
          <Text style={styles.Text}>Jugador 1.1</Text>
          <Text style={styles.Text}>Jugador 1.2</Text>
          <Text style={styles.Text}>Jugador 1.3</Text>
          <Text style={styles.Text}>Jugador 1.4</Text>
          <Text style={styles.Text}>Jugador 1.5</Text>
        </View>
        <View style={styles.main2}>
          <Image style={styles.foto} source={require('./imagenes/imagen.png')}></Image>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.Text}>www.equipo.com</Text>
        <Text style={styles.Text}>123456789</Text>
      </View>
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
  header:{
    paddingTop: 10,
    paddingBottom: 10,
    width: "200vh",
    borderWidth: 1,
    flex: 'fitContent',
    flexDirection: 'row',
    justifyContent: 'left',
  },
  main:{
    width: "200vh",
    borderWidth: 2,
    flex: "auto",
    flexDirection: 'row',
  },
  main1:{
    borderWidth: 2,
    flex: "fitContent",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  main2:{
    borderWidth: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer:{
    paddingTop: 10,
    paddingBottom: 10,
    width: "200vh",
    borderWidth: 2,
    flex: 'fitContent',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text: {
    margin: 10,
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 30,
    fontWeight: 'normal',
  },
  foto: {
    height: 'auto',
    position: 'static',
  }
});
