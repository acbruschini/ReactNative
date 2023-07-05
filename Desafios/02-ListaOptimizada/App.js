import { StyleSheet} from 'react-native';
import MainScreen from './Screens/MainScreen';

export default function App() {
  return (
    <MainScreen></MainScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
