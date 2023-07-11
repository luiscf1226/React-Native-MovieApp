import React from "react";
import {View,Text} from 'react-native';
import CrearCuenta from '../componentes/Crear-Cuenta/CrearCuenta.jsx'
import VerPeliculas from "../componentes/VerPeliculas/VerPeliculas.jsx";

const Home = ()=>{
    return (
        <View>
            <VerPeliculas/>
        </View>
    )
}
export default Home;