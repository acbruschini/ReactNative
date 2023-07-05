import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';

export default function App() {
  return (
    <View style = {styles.container}>
      <Header></Header>
      <Home></Home>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})