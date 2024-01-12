import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale, horizontalScale } from '../../themes/Metrixs'
import LottieView from 'lottie-react-native'


type AlertProps = {
    alertText: string
    alertVisible?: any
}

const AlertPopUp = ({alertText, alertVisible}: AlertProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upsss! you made a mistake :(</Text>
      <LottieView
      style={styles.lottie}
      autoPlay
      source={require("../../../assets/Animatiom/alertsign.json")}
      />
      <Text style={styles.message}>{alertText}</Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => alertVisible(false)}
      >
        <Image 
        style={styles.closeicon}
        source={require("../../../assets/LogoAction/close-svgrepo-com.png")} />
      </TouchableOpacity>
    </View>
  )
}

export default AlertPopUp

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    padding:moderateScale(20),
    justifyContent:"center"
},
header:{
    fontSize:moderateScale(17),
    textAlign:"center",
    fontWeight:"bold",
    textTransform:"capitalize"
},
lottie:{
    width:moderateScale(100),
    height:moderateScale(100)
},
message:{
    fontSize:moderateScale(14),
    textAlign:"center",
},
closeButton: {
    width:horizontalScale(40),
    height:verticalScale(40),
    resizeMode: "contain",
    position: "absolute",
    top:verticalScale(-15),
    right:horizontalScale(-15),
  },
  closeicon:{
    width:horizontalScale(35),
    height:verticalScale(35),
    resizeMode:"contain"
  },

})