import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type ButtonProps = {
    text: string
}
const Button = ({text}: ButtonProps) => {
  return (
    <TouchableOpacity 
    onPress={()=>console.log("hello")}
    style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#0080ff",
        backgroundColor:"#318CE7",
        width: 350,
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginTop:10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row",
      },
      text:{
    color:"#fff",
    fontSize:25,
    fontWeight:"bold",
    fontFamily:"Acme-Regular"
      } 
})