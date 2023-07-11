import react from "react"
import {View,Text,Image,StyleSheet} from 'react-native'
import ImagenLogo from '../../images/download.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";
import Imagen1 from '../../images/chciamovie.b95334e287e458025aaf.jpg'
import Imagen2 from '../../images/nopmovie.98a3de6e86247754dfb4.jpg'
import Imagen3 from '../../images/spidermovie.a499d97034d6dc04d7bf.png'
import Imagen4 from '../../images/superquien.869904e1956c3d0e07fd.jpg'
import Imagen5 from '../../images/tadeomovie.400bb3a73704c6421414.jpg'
import Footnote from "../Footnote/Footnote";
const images = [Imagen1, Imagen2, Imagen3, Imagen4, Imagen5];
const VerPeliculas=()=>{
    return(
        <View style={{backgroundColor:'white',height:'100%'}}>
            <View style={{marginTop:10,marginLeft:15}}>
                <Text>
                    UNITEC
                </Text>
            </View>
            <View  style={{marginTop:20,marginLeft:25}}>
                <Image source={ImagenLogo}></Image>
            </View>
            <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'}}>
                <Icon style={{padding:10}} name="arrow-left" size={30} color="black" />
                <Text style={{fontSize:20}}>Peliculas</Text>
            </View>
           
                <SliderBox
                    style={styles.sliderBox}
                    images={images}
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