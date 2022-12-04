import {  Text, View, Image, StyleSheet } from "react-native";
import { Character } from "../models/character"; 


interface Props extends Character {}

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
            </View>
        </View>
    )

}


export default Character;
