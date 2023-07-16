import react from "react"
import { View, Text, Image, StyleSheet } from 'react-native'
import ImagenLogo from '../../images/download.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";
import Footnote from "../Footnote/Footnote";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import axios from "axios"
import { Alert } from 'react-native';

const VerPeliculas = () => {
  const [peliculas, setPelicula] = useState([])
  const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate('DetallePelicula', { idPelicula: ['Brent', 'Satya', 'Michaś'] });
  };

  const handleImagePress = (index) => {
    // Get the corresponding pelicula object based on the index
    const selectedPelicula = peliculas[index];
  
    // Perform actions with the selected pelicula object
    console.log('Selected Pelicula:', selectedPelicula.idPelicula);
   
    navigation.navigate('DetallePelicula', { idPelicula: selectedPelicula.idPelicula});

  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();

  }, []);

  const fetchData = async () => {
    try {
      axios.get('https://nodejs-postgressserver-filmtrip-production.up.railway.app/getPeliculaImagen').then((response) => {
        setPelicula(response.data);
      })
        .finally((response) => {
          
        }

        );



    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <View style={{ marginTop: 10, marginLeft: 15 }}>

      </View>
      <View style={{ marginTop: 20, marginLeft: 25 }}>
        <Image source={ImagenLogo}></Image>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Icon style={{ padding: 10 }} name="arrow-left" size={30} color="black" />
        <Text style={{ fontSize: 20 }}>Peliculas</Text>
      </View>

      <SliderBox
        style={styles.sliderBox}
        images={peliculas.map(obj => obj.FotoUrl)}
        onCurrentImagePressed={handleImagePress}
      />


      <Footnote></Footnote>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderBox: {
    height: 390,
    width: 300,
    marginLeft: 50,
    borderRadius: 50,
    resizeMode: 'cover', // Ensure images fit perfectly
  },
});

export default VerPeliculas