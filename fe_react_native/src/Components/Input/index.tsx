import { StyleSheet, View, TextInput, Image } from 'react-native'
import React from 'react'
import { verticalScale, horizontalScale, moderateScale } from '../../themes/Metrixs'
import { useState, useEffect } from 'react'

type InputProps = {
 handleChange?:(key:string, value:string)=>void;
 dataUser?:any;
}

const Input = ({handleChange, dataUser}:InputProps) => {


  return (
    <View style={styles.container}>
    <Image
     style={{width:horizontalScale(30), height:verticalScale(30)}}
     source={require("../../../assets/LogoAction/edit-4-svgrepo-com.png")}
    />
      <TextInput
      onChangeText={(value) => handleChange("username",value)}
      value={dataUser?.username}
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
  paddingHorizontal: horizontalScale(10),
  borderRadius:moderateScale(10),
  width:horizontalScale(350),
},
input:{
  width:horizontalScale(200),
  height:verticalScale(45),
  paddingHorizontal:horizontalScale(10),
  paddingVertical:verticalScale(5),
 
  
  fontSize:moderateScale(15)
}

})