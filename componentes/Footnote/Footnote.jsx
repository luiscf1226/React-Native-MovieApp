import react from 'react'
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Footnote =()=>{
    return(
        <View style={{ position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,}}>
             <View style={{ width: '100%',
                height: 1,
                marginTop:5,
                backgroundColor: 'black',}} />
             <View style={{ 
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'center',gap:50}}>
                    <Icon style={{padding:10}} name="home" size={45} color="black" />
                    <Icon style={{padding:10}} name="ticket" size={45} color="black" />
                    <Icon style={{padding:10}} name="user" size={45} color="black" />
            </View>
        </View>
       
    )
}
export default Footnote;