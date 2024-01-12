import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { verticalScale, horizontalScale, moderateScale } from '../../themes/Metrixs'

type ButtonProps = {
    text: string
    onPress?: any
}
const Button = ({text, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity 
    onPress={()=>onPress()}
    style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#318CE7",
        width:horizontalScale(350),
        height:verticalScale(50),
        paddingHorizontal: horizontalScale(40),
        paddingVertical: verticalScale(10),
        marginTop:verticalScale(10),
        borderRadius: moderateScale(10),
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row",
      },
      text:{
    color:"#fff",
    fontSize:moderateScale(20),
    fontWeight:"bold",
    fontFamily:"Acme-Regular"
      } 
})