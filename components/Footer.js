import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Footer() {
    return (
    <View style={styles.footer}>
        <Text style={styles.Text}>www.equipo.com</Text>
        <Text style={styles.Text}>123456789</Text>
    </View>
    );
}

const styles = StyleSheet.create({
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
});