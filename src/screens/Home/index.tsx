import React from "react";
import { ImageBackground, Image, View, Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "../../screens/Home/styles";
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/button";

export function Home({ setpageI }: Ipagina) {
    const home = require('../../assets/Moria.png')
    return (
        <ImageBackground source={home} style={styleContainer.container}>
            <View style={styles.Image}>
                <Text style={styles.text}>Requeijão não é catupiry
                </Text>
            </View>
            <View style={styles.ball}>
            <ButtonPage onPrsseI={() => setpageI(1)} />
            <ButtonPage onPrsseI={() => setpageI(2)} />
            <ButtonPage onPrsseI={() => setpageI(3)} />
            <ButtonPage onPrsseI={() => setpageI(4)} />
            </View>
        </ImageBackground>


    )
}


