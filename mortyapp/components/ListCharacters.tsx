import { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Character } from '../models/character'
import { getCharacterView } from '../views/getCharacterView'
import CharacterItem from './Character'

const ListCharacters = async (props: any) => {

    const [listCharacters, _] = useState<Character[] | []>(await getCharacterView())

  return (
    <View>
      <Text>ListCharacters</Text>
      <View>
        <FlatList
            data={listCharacters}
            renderItem={(props: Character | any) => <CharacterItem  key={props.id} {...props} />} 
        />
      </View>
    </View>
  )
}

export default ListCharacters