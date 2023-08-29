import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import NumeroAleatorio from './componentes/NumeroAleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      
      <NumeroAleatorio min={1}  max={60}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});