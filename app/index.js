import React from "react";
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from "../componentes/home/HomePage";
import SignIn from "../componentes/sign_in/SignIn";
import CrearCuenta from "../componentes/Crear-Cuenta/CrearCuenta";
import VerPeliculas from '../componentes/VerPeliculas/VerPeliculas';
import DetallePelicula from '../componentes/DetallePelicula/DetallePelicula';

const Stack = createStackNavigator();
const Home = () => {
  return (

    <Stack.Navigator>


      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="CrearCuenta" component={CrearCuenta} />


      <Stack.Screen name="VerPeliculas" component={VerPeliculas} />


      <Stack.Screen name="DetallePelicula" component={DetallePelicula} />
    </Stack.Navigator>

  );
}
export default Home;