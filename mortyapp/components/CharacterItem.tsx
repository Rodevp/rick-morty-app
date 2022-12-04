import {  Text, View, Image, StyleSheet, Animated } from "react-native";
import { ICharacter } from "../models/character"; 


interface Props extends ICharacter {
    heigth: number,
    space: number,
    translateY: Animated.AnimatedInterpolation<string | number>
}

const Character = (props: Props) => {

    const { name, species, gender, image, heigth, space, translateY } = props;

    return (
        <Animated.View
            style={{
                ...styles.card,
                marginHorizontal:space,
                padding: space,
                height: heigth,
                transform: [{
                    translateY
                }]
            }}
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
        </Animated.View>
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
        width: 250,
        borderRadius: 24,
        marginBottom: 10,
        backgroundColor: "green",
        alignContent: "center"
    }
})

export default Character;
