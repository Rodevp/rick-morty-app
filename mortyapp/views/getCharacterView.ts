import { useGetCharacters } from "../hooks/useGetCharacters";
import { ICharacter } from "../models/character";
import ResponseCharacter from "../models/responses";

export async function getCharacterView(): Promise<ICharacter[]> {
    
    const characterResponse: ResponseCharacter | null = await useGetCharacters() 

    if ( characterResponse === null ) return []

    return characterResponse.results

}