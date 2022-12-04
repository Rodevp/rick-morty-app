import { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    ListRenderItemInfo,
    Dimensions,
    Animated,
    SafeAreaView,
    StyleSheet } from 'react-native'
import { ICharacter } from '../models/character'
import { getCharacterView } from '../views/getCharacterView'
import CharacterItem from './CharacterItem'

interface Props {}


const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
const WIDTH_CONTENT = WIDTH * 0.7
const SPACE = 10

const ListCharacters = (props: Props) => {

    const [listCharacters, setListCharacters] = useState<ICharacter[] | []>([])

    useEffect(() => {

        getCharacterView()
            .then( data => setListCharacters(data) )
            .catch(err => console.log(err))

    }, [])

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text>ListCharacters</Text>
      <View>
        <FlatList
            data={listCharacters}
            renderItem={({ item }: ListRenderItemInfo<ICharacter>) => (
              <CharacterItem  
                key={item.id} 
                {...item}
                space={SPACE}
                heigth={WIDTH_CONTENT * 1.2} 
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 200
            }}
            decelerationRate={0}
            snapToInterval={WIDTH_CONTENT}
            scrollEventThrottle={16}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  }
})

export default ListCharacters