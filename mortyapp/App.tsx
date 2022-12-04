import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import CharacterPresenter from './presenters/CharacterPresenter';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CharacterPresenter />
    </View>
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
