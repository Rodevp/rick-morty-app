import { View, StyleSheet } from 'react-native'
import ListCharacters from '../components/ListCharacters'

interface Props {}

const CharacterPresenter = (props: Props) => {
  return (
    <View
      style={styles.presenter}
    >
        <ListCharacters />
    </View>
  )
}

const styles = StyleSheet.create({
  presenter: {
    width: "100%"
  }
})


export default CharacterPresenter