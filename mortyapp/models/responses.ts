import { ICharacter } from "./character";
import { Info } from "./info";

export default interface ResponseCharacter {
    info: Info
    results: Array<ICharacter>
}