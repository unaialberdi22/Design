import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Equipo() {
  const equipos = ["Porsche","Ferrari","BMW","Mercedes"];
    return (
      <View style={styles.header}>
        {equipos.map((equipo) => {
        return(
          <Text style={styles.Text}>{equipo}</Text>
        );
      })}
      </View>
    );
}

const styles = StyleSheet.create({
  header:{
    paddingTop: 10,
    paddingBottom: 10,
    width: "200vh",
    borderWidth: 1,
    flex: 'fitContent',
    flexDirection: 'row',
    justifyContent: 'left',
  },
  Text: {
    margin: 10,
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 30,
    fontWeight: 'normal',
  },
});