import React from "react";
import { ImageBackground, Image, View, Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "./styles";
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/button";

export function Pag4({ setpageI }: Ipagina) {
    const home = require('../../assets/Mordor.png')
    const book = require('../../assets/SIL.jpg')
    return (
        <ImageBackground source={home} style={styleContainer.container}>
            <View style={styles.Image}>
                <Image source={book} >
                </Image>
            <Text style={styles.Titulo}>
            Today is going to be the day
            </Text>
            <View style={styles.Tam}>
            <Text style={styles.Text}> Se eu fosse pelé, tomava café, se fosse Tostão, tirava o calção, se fosse Dario pulava no rio, se fosse garrincha não pulava não
                </Text>
            </View>
            <View style={styles.espaco}>
            <Text style={styles.botao}>
            Veja mais
            </Text>
            </View>
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