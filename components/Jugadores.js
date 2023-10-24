import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Jugadores() {
    return (
    <View style={styles.main1}>
        <Text style={styles.Text}>Jugador 1.1</Text>
        <Text style={styles.Text}>Jugador 1.2</Text>
        <Text style={styles.Text}>Jugador 1.3</Text>
        <Text style={styles.Text}>Jugador 1.4</Text>
        <Text style={styles.Text}>Jugador 1.5</Text>
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