import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Imagen({equipos, equipoSeleccionado, jugadorSeleccionado}) {

  const foto = equipos[equipoSeleccionado][jugadorSeleccionado].imgIndex;

    return (
        <View style={styles.imagen}>
          <Image style={styles.foto} source={require(`../imagenes/${foto}.jpg`)} resizeMode="cover" onError={(e) => console.log(e.nativeEvent.error)}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    imagen:{
        borderWidth: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      foto: {
        flex: 1,
        width: undefined,
        height: undefined,
        position: 'static',
      }
});