import React,{useState} from 'react'
import {View,Text,SafeAreaView,Image,TextInput,KeyboardAvoidingView,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import imagenLogo from '../../images/download.png'
import Checkbox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from "expo-checkbox";


import VerPeliculas from '../VerPeliculas/VerPeliculas';

const CrearCuenta=()=>{
 
      
    const [agree, setAgree] = useState(false);
    const [agree2, setAgree2] = useState(false);
    const [nombre, setNombre] = useState('');
    const isValidName = (name) => {
        const regex = /^[a-zA-Z]+$/;
        return regex.test(name);
      };
    
      const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
    
      const isValidPassword = (password) => {
        
        return password.length >= 8;
      };
    
    
    const handleNombreChange = (text) => {
        setNombre(text);
    };
    const [apellido, setApellido] = useState('');

    const handleApellidoChange = (text) => {
        setApellido(text);
    };
    const [correo, setCorreo] = useState('');

    const handleCorreoChange = (text) => {
        setCorreo(text);
    };
    const [password, setPassword] = useState('');

    const handlePasswordChange = (text) => {
        setPassword(text);
    };
    const [password2, setPassword2] = useState('');

    const handlePassword2Change = (text) => {
        setPassword2(text);
    };
    return (
    <KeyboardAwareScrollView style={{backgroundColor:'white',height:'100%'}} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <View style={{backgroundColor:'white',height:'100%'}}>
            <View>
                <Text style={{padding:10}}>UNITEC</Text>
                <Icon style={{padding:10}} name="arrow-left" size={30} color="black" />
                
            </View> 
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={imagenLogo}/>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:5,
            }}>
                <Text style={{fontSize:25}}>Crear Cuenta</Text>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:5,
            }}>
                <TextInput  
                    style={{
                        height: 45,
                        width: 240,
                        backgroundColor: 'rgb(230, 230, 230)',
                        fontSize: 20,
                        borderWidth: 0, 
                        borderRadius: 4,
                        padding: 10,
                        fontSize: 16,
                        marginTop:10
                        
                        
                    }}
                    value={nombre}
                    onChangeText={handleNombreChange}
                    placeholder="Nombre"
                    placeholderTextColor="#000" 
                        
                />  
                <View></View>
                <View></View>
                <TextInput  
                    style={{
                        height: 45,
                        width: 240,
                        backgroundColor: 'rgb(230, 230, 230)',
                        fontSize: 20,
                        borderWidth: 0, 
                        borderRadius: 4,
                        padding: 10,
                        fontSize: 16,
                        marginTop:10
                        
                        
                    }}
                    value={apellido}
                    onChangeText={handleApellidoChange}
                    placeholder="Apellido"
                    placeholderTextColor="#000" 
                        
                />  
                <TextInput  
                    style={{
                        height: 45,
                        width: 240,
                        backgroundColor: 'rgb(230, 230, 230)',
                        fontSize: 20,
                        borderWidth: 0, 
                        borderRadius: 4,
                        padding: 10,
                        fontSize: 16,
                        marginTop:10
                        
                        
                    }}
                    value={correo}
                    onChangeText={handleCorreoChange}
                    placeholder="Correo"
                    placeholderTextColor="#000" 
                        
                />  

                <TextInput  
                    style={{
                        height: 45,
                        width: 240,
                        backgroundColor: 'rgb(230, 230, 230)',
                        fontSize: 20,
                        borderWidth: 0, 
                        borderRadius: 4,
                        padding: 10,
                        fontSize: 16,
                        marginTop:10
                        
                        
                    }}
                    value={password}
                    onChangeText={handlePasswordChange}
                    placeholder="Password"
                    placeholderTextColor="#000" 
                        
                />  

                <TextInput  
                    style={{
                        height: 45,
                        width: 240,
                        backgroundColor: 'rgb(230, 230, 230)',
                        fontSize: 20,
                        borderWidth: 0, 
                        borderRadius: 4,
                        padding: 10,
                        fontSize: 16,
                        marginTop:10
                        
                        
                    }}
                    value={password2}
                    onChangeText={handlePassword2Change}
                    placeholder="Repeat Password"
                    placeholderTextColor="#000" 
                        
                />  
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                marginTop: 15,
                marginLeft:50
                }}>
                <CheckBox
                    style={{ height: 30, width: 30 }}
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "#2e3054" : undefined}
                />
                <Text style={[styles.text, { flex: 1 }]}>
                    Leo y Acepto los Terminos y Condiciones
                </Text>
                </View>
                <View style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                marginTop: 15,
                marginLeft:50
                }}>
                <CheckBox
                    style={{ height: 30, width: 30 }}
                    value={agree2}
                    onValueChange={() => setAgree2(!agree2)}
                    color={agree2 ? "#2e3054" : undefined}
                />
                <Text style={[styles.text, { flex: 1 }]}>
                    Deseo Recibir Correos Electronicos
                </Text>
                </View>
            </View>
         <View style={{display: "flex",
                flexDirection: "row",
                alignContent: "center",}}>
            <TouchableOpacity 
                style={styles.button}
                onPress={()=>{
                    if (nombre === "" || apellido === "" || correo === "" || password === "" || password2 === "") {
                        alert('Ningún campo puede estar vacío');
                      } else if (!isValidName(nombre)) {
                        alert('El nombre contiene caracteres especiales o espacios');
                      } else if (!isValidName(apellido)) {
                        A('El apellido contiene caracteres especiales o espacios');
                      } else if (!isValidEmail(correo)) {
                        alert('El correo electrónico no es válido');
                      } else if (password !== password2) {
                        alert('Las contraseñas no coinciden');
                      } else if (!isValidPassword(password)) {
                        alert('La contraseña no cumple con los requisitos');
                      } else if (agree === false || agree2 === false) {
                        alert('Debe aceptar todos los términos');
                      } else {
                        alert('Procede');
                       
                      }
                }}
            >
                <Text style={styles.buttonText}>Crear Cuenta</Text>
            </TouchableOpacity>

         </View>
        </View>
        </KeyboardAwareScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding: 16,
      paddingTop: 100,
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      paddingVertical: 15,
    },
    text: {
      lineHeight: 30,
      marginLeft: 10,
    },
    button: {
        backgroundColor: '#2e3054',
        paddingVertical: 15,
        paddingHorizontal: 90,
        marginLeft:50,
        borderRadius: 8,
        marginTop:10
      },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
  });

export default CrearCuenta