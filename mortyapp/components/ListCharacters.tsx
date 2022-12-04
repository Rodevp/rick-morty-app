import { useEffect, useRef, useState } from 'react'
import {
    View,
    FlatList,
    ListRenderItemInfo,
    Dimensions,
    Animated,
    SafeAreaView,
    StyleSheet,
    Image } from 'react-native'
import { ICharacter } from '../models/character'
import { getCharacterView } from '../views/getCharacterView'
import CharacterItem from './CharacterItem'

interface Props {}
interface PropsBack {
  scrollX: Animated.AnimatedInterpolation<string | number>,
  images: Array<string>
}

const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
const WIDTH_CONTENT = WIDTH * 0.7
const SPACE = 10
const SPACE_CONTENT = (WIDTH - WIDTH_CONTENT) / 2
const HEIGHT_BACKDROOP = HEIGHT * 0.5


const BackDroop = ({scrollX, images}: PropsBack ) => {

 
  return (
    <View
      style={[
        {height: HEIGHT_BACKDROOP, width: WIDTH, position: "absolute", top: 0},
        StyleSheet.absoluteFillObject
      ]}
    >
      {
        images.map((image, index) => {
          
          const inputRange = [
            (index - 1) * WIDTH_CONTENT,
            index * WIDTH_CONTENT,
            (index + 1) * WIDTH_CONTENT
          ]
        
          const outputRange = [0, 1, 0]
        
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange
          })
          
          return (
            <Animated.Image
            source={{uri: image}}
            key={index}
            style={[
              {height: HEIGHT_BACKDROOP, width: WIDTH, position: "absolute", top: 0},
              { opacity: opacity }
            ]}
          />
          )
        })
      }
    </View>
  )
}



const ListCharacters = (props: Props) => {

    const [listCharacters, setListCharacters] = useState<ICharacter[] | []>([])
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        getCharacterView()
            .then( data => setListCharacters(data) )
            .catch(err => console.log(err))

    }, [])

    const allImages = listCharacters.map(character => character.image)

  return (
    <SafeAreaView
      style={styles.container}
    >
      <BackDroop
        images={allImages}
        scrollX={scrollX}
      />
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
              paddingHorizontal: SPACE_CONTENT
            }}
            decelerationRate={0}
            snapToInterval={WIDTH_CONTENT}
            scrollEventThrottle={16}
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