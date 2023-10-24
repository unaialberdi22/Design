import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Imagen() {
    return (
        <View style={styles.imagen}>
          <Image style={styles.foto} source={require('../imagenes/imagen.png')}></Image>
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
        height: 'auto',
        position: 'static',
      }
});