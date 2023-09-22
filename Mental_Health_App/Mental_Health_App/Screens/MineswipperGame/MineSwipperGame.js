import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Board from './components/Board';

export default function MineSwipperGame() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/bomblogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Board />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3a32b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    paddingTop:120,
    marginBottom:10, 
    
  },
});