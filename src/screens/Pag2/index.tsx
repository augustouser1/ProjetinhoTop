import React from "react";
import { ImageBackground, Image, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "../../screens/Home/styles";
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/button";

export function Pag2({ setpageI }: Ipagina) {
    const tani = require('../../assets/Tani.png')
   
    return (
        <ImageBackground source={tani} style={styleContainer.container}>
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