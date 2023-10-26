import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Jugadores() {

    const jugadores = ["Unai","Mikel","Jorge","Ander"];

    return (
    <View style={styles.main1}>
      {jugadores.map((jugador) => {
        return(
          <Text style={styles.Text}>{jugador}</Text>
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