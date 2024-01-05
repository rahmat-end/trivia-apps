import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import EditSvg from '../../assets/login/EditSvg'

const Input = () => {
  return (
    <View style={styles.container}>
    <EditSvg
      width={30}
      height={30}
      fill="none"
      strokeColor="#89CFF0"
    />
      <TextInput
      onChangeText={() => console.log("hello")}
      style={styles.input}
      placeholder='Type your name here...'
      />
    </View>
   
  )
} 

export default Input

const styles = StyleSheet.create({
container:{
  flexDirection:"row",
  backgroundColor: "white",
  alignItems: "center",
  gap: 3,
  paddingHorizontal: 10,
  borderRadius: 10,
  width: 350,
},
input:{
  width: 200,
  height: 45,
  paddingHorizontal: 10,
  paddingVertical:5,
 
  
  fontSize:19
}

})