import React from "react";
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const HomePage = () => {
    const navigation = useNavigation();

    const goToSignIn = () => {
        navigation.navigate('SignIn');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "rgb(255,254,254)" },
                    headerShadowVisible: false,

                    headerTitle: "",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "rgb(255,254,254)" }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgb(255,254,254)", width: "100%", height: "100%", marginTop: "30%" }}>
                    <Text style={{
                        "color": "rgb(46, 48, 84)",
                        "textAlign": "center",
                        "fontSize": 40, // Add the appropriate unit, e.g., "px" or "pt"
                        "fontWeight": 600

                    }}
                    >Bienvenido/a</Text>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
                        <Image
                            source={require("../../images/descarga.png")}
                            style={{ alignItems: "center", justifyContent: "center" }}
                        />
                    </View>
                    <Text style={{
                        "color": "rgb(10, 18, 40)",
                        "textAlign": "center",
                        "fontSize": 15, // Add the appropriate unit, e.g., "px" or "pt"  
                        "width": "60%",
                        "fontWeight": 450

                    }}> Todos los cines al
                        alcance de tu mano</Text>


                </View>

                <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center", marginTop: "35%" }}>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}
                        onPress={goToSignIn}>
                        <Text style={{ fontWeight: "700" }}>Comenzar </Text>
                        <AntDesign name="arrowright" size={24} color="black" />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView >
    );
};

export default HomePage;
