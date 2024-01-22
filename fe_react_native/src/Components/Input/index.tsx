import { StyleSheet, View, TextInput, Image } from 'react-native'
import React from 'react'
import { verticalScale, horizontalScale, moderateScale } from '../../themes/Metrixs'
import { useState, useEffect } from 'react'

type InputProps = {
 handleChange?:(key:string, value:string)=>void;
 dataUser?:any;
 placeholder?:string
 namakey?:string
}

const Input = ({handleChange, dataUser, placeholder, namakey}:InputProps) => {


  return (
    <View style={styles.container}>
    <Image
     style={{width:horizontalScale(30), height:verticalScale(30)}}
     source={require("../../../assets/LogoAction/edit-4-svgrepo-com.png")}
    />
      <TextInput
      onChangeText={(value) => handleChange(`${namakey}`,value)}
      value={dataUser?.[namakey]}
      style={styles.input}
      placeholder={placeholder}
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
  marginBottom: verticalScale(10),
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