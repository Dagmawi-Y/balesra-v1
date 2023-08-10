import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image } from 'react-native-elements'

const AplyJob = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>AplyJob Screen goes here</Text>
      <Text style={{color:'black'}}>This screen will contain a card for others who applly for the job</Text>
        
        <TouchableOpacity
         style={styles.btn}
         onPress={()=>navigation.navigate('Employee')}
         >
          <Image 
          style={styles.img}
          source={require('../assets/juric.png')}/>
          <Text style={{color:'black',fontSize:16}}>Andric</Text>
         </TouchableOpacity>
      <></>
    </View>
  )
}

const styles = StyleSheet.create({
  img:{
    height:110,
    width:65
  },
  btn:{
    marginTop:40,
    backgroundColor:'#4ca6a8',
    height:54,
    borderRadius:12,
    alignItems:'center',
    justifyContent:'center',
    margin:10
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        color:'black'
    }
})

export default AplyJob