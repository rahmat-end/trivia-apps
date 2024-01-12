import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../themes/Metrixs'
import useLogin from '../../hooks/useLogin'
import { useAppSelector } from '../../Redux/hooks'  

type SettingModalProps = {
    setIsOpen : ()=>void
    navigation: any
}


const SettingModal = ({setIsOpen, navigation}:SettingModalProps) => {
    const {handleLogout} = useLogin()
    const {user} = useAppSelector((state: any) => state.user);
    useEffect(() => {
       if(user.token===""){
        navigation.navigate("Login Screen")
       }
    }, [user]);
  return (
    <View style={styles.overlay}>
    <View style={styles.container}>
        <Text style={styles.text}>Setting</Text>
        <TouchableOpacity style={styles.buttonmenu}>
            <Image 
            style={styles.imagemenu}
            source={require("../../../assets/LogoAction/profile-user-svgrepo-com.png")} />
        <Text style={styles.textMenu}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={handleLogout}
        style={styles.buttonlogout}>
            <Image 
            style={styles.imagemenu}
            source={require("../../../assets/LogoAction/logout-svgrepo-com.png")} />
        <Text style={styles.textMenu}>Logout</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={() => setIsOpen()}
        style={styles.imageContainer}>
      <Image 
      style={styles.image}
      source={require("../../../assets/LogoAction/close-svgrepo-com.png")} />

        </TouchableOpacity>
    </View>

    </View>
  )
}

export default SettingModal

const styles = StyleSheet.create({
container:{
    width:horizontalScale(300),
    height:verticalScale(200),
    backgroundColor:"#fff",
    position:"relative",
    marginTop:verticalScale(300),
    borderRadius:moderateScale(10),
    padding:moderateScale(10),
    alignItems:"center",
},
overlay:{
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    top:0,
    left:0,
    right:0,
    bottom:0,
},
text:{
    fontSize:moderateScale(23),
    fontWeight:"bold",
    marginBottom:verticalScale(5),
},
buttonmenu:{
width:horizontalScale(200),
height:verticalScale(50),
padding:moderateScale(10),
backgroundColor:"#318CE790",
borderRadius:moderateScale(10),
alignItems:"center",
justifyContent:"center",
flexDirection:"row",
gap:10
},

buttonlogout:{
    width:horizontalScale(200),
    height:verticalScale(50),
    padding:moderateScale(10),
    backgroundColor:"red",
    borderRadius:moderateScale(10),
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    marginTop:verticalScale(20),
    gap:10
    },
textMenu:{
    fontSize:moderateScale(15),
    fontWeight:"bold",
    color:"white"
},
imagemenu:{
    width:horizontalScale(25),
    height:verticalScale(25),
   
},


image:{
    width:horizontalScale(35),
    height:verticalScale(35),
    resizeMode:"contain"
   
},
imageContainer:{
    position:"absolute",
    top:verticalScale(-15),
    right:horizontalScale(-10),
}

})