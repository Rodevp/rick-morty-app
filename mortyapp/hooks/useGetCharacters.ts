import ResponseCharacter from "../models/responses"

export const useGetCharacters = async (): Promise<ResponseCharacter | null> => {

    try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data: ResponseCharacter = await response.json()
        return data       
    } catch (error) {
        return null
    }


}