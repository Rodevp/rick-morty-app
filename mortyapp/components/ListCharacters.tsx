import { useEffect, useRef, useState } from 'react'
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
const SPACE_CONTENT = (WIDTH - WIDTH_CONTENT) / 2
const HEIGHT_BACKDROOP = HEIGHT * 0.5

const ListCharacters = (props: Props) => {

    const [listCharacters, setListCharacters] = useState<ICharacter[] | []>([])
    const scrollX = useRef(new Animated.Value(0)).current;

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
        <Animated.FlatList
            data={listCharacters}
            renderItem={({ item, index }: ListRenderItemInfo<ICharacter>) => {

              const inputRange = [
                (index - 1) * WIDTH_CONTENT,
                index * WIDTH_CONTENT,
                (index + 1) * WIDTH_CONTENT
              ]

              const outputRange = [0, -50, 0]

              const translateY = scrollX.interpolate({
                inputRange,
                outputRange
              })

              return (
                <CharacterItem  
                  key={item.id} 
                  {...item}
                  space={SPACE}
                  heigth={WIDTH_CONTENT * 1.2}
                  translateY={translateY} 
                />
              )

            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 200,
              marginHorizontal: SPACE_CONTENT
            }}
            decelerationRate={0}
            snapToInterval={WIDTH_CONTENT}
            scrollEventThrottle={8}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
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