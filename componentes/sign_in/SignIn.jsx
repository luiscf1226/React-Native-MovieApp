import React, { useState } from "react";
import axios from 'axios'
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";
import { useFonts } from "expo-font";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();
    //Load fonts for this component
    const [fontsLoaded] = useFonts({
        Montserrat: require("../../fonts/Montserrat-Regular.ttf"),
        MontserratBold: require("../../fonts/Montserrat-Bold.ttf")
    });

    //Consts declared
    const [email, setEmail] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [isFocusedPass, setIsFocusedPass] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    //Set the email input from the user
    const handleEmailChange = (inputText) => {
        setEmail(inputText);
    };

    //Set the password input from the user
    const handlepasswordChange = (inputText) => {
        setContrasenia(inputText);
    };


    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };


    const handleFocusPass = () => {
        setIsFocusedPass(true);
    };

    const handleBlurPass = () => {
        setIsFocusedPass(false);
    };

    const validateInfoLogIn = async () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        // Check if email and password are not empty
        if (email !== "" && contrasenia !== "") {
          // Check if the email matches the pattern
          if (emailPattern.test(email)) {
            const url = 'https://nodejs-postgressserver-filmtrip-production.up.railway.app/checkUsuario'; // Replace with your API endpoint
      
            const requestData = {
              Correo: email,
              Password: contrasenia
            };
      
            try {
              const response = await axios.post(url, requestData);
              console.log('Response:', response.data);
              // Handle the successful authentication based on your logic
              Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Inicio de sesión exitoso',
                textBody: '¡Has iniciado sesión correctamente!',
                button: 'Continuar',
              });
              navigation.navigate('VerPeliculas');
            } catch (error) {
              console.error('Error:', error);
              // Handle the authentication failure based on your logic
              setContrasenia("");
              setEmail("");
              Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'Error al iniciar sesión',
                textBody: 'No se pudo iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.',
                button: 'Aceptar',
              });
            }
          } else {
            // Reset consts if login failed
            setContrasenia("");
            setEmail("");
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error al iniciar sesión',
              textBody: 'No se pudo iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.',
              button: 'Aceptar',
            });
          }
        } else {
          Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: 'Error al iniciar sesión',
            textBody: 'Por favor, ingresa tu email y contraseña para iniciar sesión.',
            button: 'Aceptar',
          });
        }
      };
    if (!fontsLoaded) {
        // Fonts are still loading, show a loading indicator or fallback text
        return <Text>Loading...</Text>;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "rgb(255,254,254)", fontFamily: 'Montserrat' }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgb(255,254,254)", width: "100%", height: "100%" }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
                        <Image
                            source={require("../../images/download.png")}
                            style={{
                                marginTop: "20%"
                            }}
                        />
                    </View>

                </View>
                <Text style={{
                    "color": "rgb(46, 48, 84)",
                    fontSize: 22,
                    fontWeight: "500",
                    marginLeft: "7%",
                    marginTop: "7%",
                    fontFamily: 'Montserrat'
                }}>Iniciar Sesión</Text>

                {/* Text Inputs */}
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgb(255,254,254)", width: "100%", height: "100%" }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
                        <TextInput
                            style={{
                                borderColor: 'gray',

                                width: 300,
                                height: 40,
                                marginTop: 20,
                                textAlign: "center",
                                backgroundColor: "rgb(217, 215, 215)",
                                borderRadius: 10,
                                borderWidth: isFocused ? 2 : 0,
                                borderColor: isFocused ? 'black' : 'transparent',
                                fontFamily: 'Montserrat'
                            }}
                            placeholder="Correo"
                            onChangeText={handleEmailChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={email}
                        />
                        <TextInput
                            style={{


                                width: 300,
                                height: 40,
                                marginTop: 20,
                                textAlign: "center",
                                backgroundColor: "rgb(217, 215, 215)",
                                borderRadius: 10,
                                borderWidth: isFocusedPass ? 2 : 0,
                                borderColor: isFocusedPass ? 'black' : 'transparent',
                                fontFamily: 'Montserrat'
                            }}
                            placeholder="Contraseña"
                            onChangeText={handlepasswordChange}
                            onFocus={handleFocusPass}
                            onBlur={handleBlurPass}
                            value={contrasenia}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <Text
                    style={{
                        textAlign: "right",
                        marginTop: 30,
                        marginRight: 30,
                        fontFamily: "MontserratBold",

                    }}>¿Olvidaste tu contraseña?</Text>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgb(255,254,254)", width: "100%", height: "100%", marginTop: 30, }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
                        <AlertNotificationRoot>
                            <TouchableOpacity style={{
                                marginTop: 10,
                                backgroundColor: "#2e3054",
                                width: 300,
                                height: 40,
                                borderRadius: 10
                            }}
                                onPress={validateInfoLogIn}
                            >
                                <Text style={{
                                    color: "white",
                                    textAlign: "center",
                                    marginTop: 8,
                                    fontFamily: "Montserrat",

                                }}>Iniciar Sesión</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                marginTop: 10,
                                backgroundColor: "white",
                                width: 300,
                                height: 40,
                                borderRadius: 10,
                                borderColor: "#d4d4d4",
                                borderWidth: 2
                            }}>
                                <Text style={{
                                    color: "black",
                                    textAlign: "center",
                                    marginTop: 8,
                                    fontFamily: "Montserrat",

                                }}
                                onPress={() => {
                                    navigation.navigate('CrearCuenta');
                                }}
                                
                                >Crear Cuenta</Text>
                            </TouchableOpacity>
                        </AlertNotificationRoot>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;