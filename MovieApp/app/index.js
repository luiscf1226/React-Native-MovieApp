import React from "react";
import { View, Text } from 'react-native';
import HomePage from "../components/home/HomePage";
import SignIn from "../components/sign_in/SignIn";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Home = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Home" component={HomePage} options={{
                headerStyle: { backgroundColor: "rgb(255,254,254)" },
                headerShadowVisible: false,

                headerTitle: "",
            }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{
                headerStyle: { backgroundColor: "rgb(255,254,254)" },
                headerShadowVisible: false,

                headerTitle: "Hola",
            }} />

        </Stack.Navigator>
    )
}
export default Home;