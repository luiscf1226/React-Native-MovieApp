import react from "react"
import { ActivityIndicator, View, Text, Image, StyleSheet } from 'react-native'
import ImagenLogo from '../../images/download.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";
import Footnote from "../Footnote/Footnote";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import axios from "axios"
import { Alert } from 'react-native';
import { useFonts } from "expo-font";

const DetallePelicula = ({ navigation, route }) => {
    const [peliculas, setPelicula] = useState ([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        fetchData();
      
    }, []);
    const [fontsLoaded] = useFonts({
        Montserrat: require("../../fonts/Montserrat-Regular.ttf"),
        MontserratBold: require("../../fonts/Montserrat-Bold.ttf")
    });

    const fetchData = async () => {
        try { 
            console.log("id "+route.params.idPelicula)
            axios.get(`https://nodejs-postgressserver-filmtrip-production.up.railway.app/getPelicula/${route.params.idPelicula}`, {
             
            }).then((response) => {
                setPelicula(response.data);
            })
                .finally(() => {
                    
                      setLoading(false)
                }
                );
        } catch (error) {
            console.error(error);
        }
    };



    if (loading) {
        return (
            <View style={
                {
                    flex: 1,
                    justifyContent: 'center'
                }
            }>

                <ActivityIndicator size="large" />
            </View>
        );
    } else {
        return (
            <View>
                <View style={{

                    alignItems: "center",
                    height: "100%"
                }}>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: peliculas[0].FotoUrl }} style={styles.image} />
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View>
                            <Text style={styles.nameText}>{peliculas[0].Nombre}</Text>
                            <View style={styles.containerInfoSinop}>
                                <View style={styles.containerInfoSinopPeli}>
                                    <Text style={{ color: "#2e3155", textAlign: "center" }}>{peliculas[0].Duracion} </Text>
                                </View>
                                <View style={styles.containerInfoSinopPeli}>
                                    <Text style={{ color: "#2e3155", textAlign: "center" }}>{peliculas[0].Rango} </Text>
                                </View>
                                <View style={styles.containerInfoSinopPeli}>
                                    <Text style={{ color: "#2e3155", textAlign: "center" }}>{peliculas[0].Genero} </Text>
                                </View>
                            </View>
                            <Text style={{ color: "white", fontSize: 11, marginLeft: 10, fontFamily: "Montserrat" }}>{peliculas[0].Descripcion} </Text>
                        </View>

                        <Text style={{
                            color: "#2e3155", fontSize: 20, fontFamily: "Montserrat", marginTop: 20
                        }}>Cartelera</Text>
                        <View style={{ top: 0, right: 15 }}>
                            <View style={styles.scheduleToday} >
                                {peliculas[0].Horarios.map((horario, index) => (
                                    <View style={styles.cardHorario}>
                                        <Text style={styles.text}>{horario}</Text>
                                        <Text style={styles.text}>2D</Text>
                                        <Text style={styles.text}>Doblada</Text>
                                    </View>
                                ))}

                            </View>
                        </View>
                    </View>
                </View>
                <Footnote></Footnote>
            </View>

        );

    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    imageContainer: {
        width: 275,
        height: 200,
        position: 'absolute',

    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 30
    },
    info: {
        width: 320,
        height: 170,
        backgroundColor: "#2e3155",
        position: 'absolute',
        top: 120,

        borderRadius: 30
    },
    nameText: {
        color: "white",
        fontFamily: "MontserratBold",
        textAlign: "center",
        marginTop: 5,
        fontSize: 15
    },
    containerInfoSinop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInfoSinopPeli: {
        flex: 0,
        marginRight: 10,
        backgroundColor: "white",
        width: 70,
        height: 23,
        borderRadius: 20,
        marginTop: 15,
        fontFamily: "Montserrat"
    },
    scheduleToday: {
        flexDirection: 'row',


        alignItems: "center"
    },

    cardHorario: {
        backgroundColor: "#2e3155",
        width: 100,
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 5,
        fontFamily: "Montserrat"
    },
});
export default DetallePelicula;