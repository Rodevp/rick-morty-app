import {  Text, View, Image, StyleSheet } from "react-native";
import { ICharacter } from "../models/character"; 


interface Props extends ICharacter {
    heigth: number,
    space: number
}

const Character = (props: Props) => {

    const { name, species, gender, image, heigth, space } = props;

    return (
        <View
            style={{...styles.card, marginHorizontal: space, padding: space, height: heigth}}
        >
            <View>
                <Image
                    style={styles.image} 
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

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderRadius: 24
    },
    card: {
        width: 200,
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
        backgroundColor: "green",
        alignContent: "center"
    }
})

export default Character;
