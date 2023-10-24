import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Jugadores from './Jugadores';
export default function Main() {
    return (
        <View>
          <Jugadores></Jugadores>
        </View>
    );
}