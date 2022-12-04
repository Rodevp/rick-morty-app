import { useEffect, useState } from 'react'
import { View, Text, FlatList, ListRenderItemInfo } from 'react-native'
import { ICharacter } from '../models/character'
import { getCharacterView } from '../views/getCharacterView'
import CharacterItem from './CharacterItem'

interface Props {}

const ListCharacters = (props: Props) => {

    const [listCharacters, setListCharacters] = useState<ICharacter[] | []>([])

    useEffect(() => {

        getCharacterView()
            .then( data => setListCharacters(data) )
            .catch(err => console.log(err))

    }, [])

  return (
    <View>
      <Text>ListCharacters</Text>
      <View>
       {
        <FlatList
            data={listCharacters}
            renderItem={({ item }: ListRenderItemInfo<ICharacter>) => (
              <CharacterItem  key={item.id} {...item} />
            )}
        />
       }
      </View>
    </View>
  )
}

export default ListCharacters