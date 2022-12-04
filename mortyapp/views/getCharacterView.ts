import { useGetCharacters } from "../hooks/useGetCharacters";
import { Character } from "../models/character";
import ResponseCharacter from "../models/responses";

export async function name(): Promise<Character[]> {
    
    const characterResponse: ResponseCharacter | null = await useGetCharacters() 

    if ( characterResponse === null ) return []

    return characterResponse.results

}