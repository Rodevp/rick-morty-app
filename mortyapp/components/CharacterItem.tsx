import {  Text, View, Image, StyleSheet } from "react-native";
import { ICharacter } from "../models/character"; 


interface Props extends ICharacter {}

const Character = (props: Props) => {

    const { name, species, gender, image } = props;

    return (
        <View>
            <View>
                <Image 
                    source={{
                        uri: image
                    }}                
                />
            </View>
            <View>
                <Text>Specie: {species}</Text>
                <Text>Name: {name}</Text>
                <Text>Gender: {gender}</Text>
                <Text>Image: {image}</Text>
            </View>
        </View>
    )

}


export default Character;
