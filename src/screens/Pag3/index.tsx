import React from "react";
import { ImageBackground, Image, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "../Home/styles";
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/button";

export function Pag3({ setpageI }: Ipagina) {
    const home = require('../../assets/Gondolin.png')
    
    return (
        <ImageBackground source={home} style={styleContainer.container}>
            <View style={styles.Image}>
                
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