import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { StatusBar } from "expo-status-bar";
  import { horizontalScale, moderateScale, verticalScale } from "../../themes/Metrixs";
  const answer = [
    {
      name: "Joy",
      isTrue: true,
    },
    {
      name: "Veksana",
      isTrue: false,
    },
    {
      name: "Karina",
      isTrue: false,
    },
    {
      name: "Faramis",
      isTrue: false,
    },
  ];
  
  const LetsPlay = () => {
    return (
      <ImageBackground
        source={require("../../../assets/BackgroundImage/playgame.png")}
        style={styles.container}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.timer}>00:05</Text>
            <Image
              style={styles.imageQuestion}
              source={{
                uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2633b97-4158-44c7-ae9e-60deb0af8370/dfgers6-115f22be-2417-41ad-97e4-5fa2c267c737.png/v1/fill/w_1192,h_670,q_70,strp/joy___mobile_legends_bang_bang_by_mrerei_dfgers6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDI2MzNiOTctNDE1OC00NGM3LWFlOWUtNjBkZWIwYWY4MzcwXC9kZmdlcnM2LTExNWYyMmJlLTI0MTctNDFhZC05N2U0LTVmYTJjMjY3YzczNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.TzRBL4N52nY6GwZji1iVLL2JC1V-NKGZ4rPANM1v0fI",
              }}
            />
  
            <Text style={styles.text}>siapakah nama hero ini?</Text>
            {answer.map((item: any, index: number) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: item.isTrue ? "#AFE1AF" : "#89CFF0",
                    padding:moderateScale(10),
                    marginBottom:verticalScale(15),
                    width:horizontalScale(300),
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:moderateScale(15),
                  }}
                >
                  <Text style={styles.textAnswer}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          <View style={styles.footer}>
              <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>4/10</Text>
              <Text style={styles.footerText}>Questions</Text>    
              </View>
              <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>4</Text>
              <Text style={styles.footerText}>Correct</Text>    
              </View>
              
             
              
          </View>
          </View>
        </View>
      
      </ImageBackground>
    );
  };
  
  export default LetsPlay;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    imageQuestion: {
      width:horizontalScale(300),
      height:verticalScale(200),
      resizeMode: "cover",
      borderRadius:moderateScale(15),
    },
    text: {
      color: "#fff",
      fontSize:moderateScale(23),
      textTransform: "capitalize",
      fontWeight: "bold",
      marginTop:verticalScale(20),
      marginBottom:verticalScale(50),
    },
    timer: {
      color: "#fff",
      fontSize:moderateScale(25),
      textTransform: "capitalize",
      fontWeight: "bold",
      marginTop:moderateScale(20),
      marginBottom:moderateScale(20),
    },
  
    textAnswer: {
      color: "#fff",
      fontSize: 23,
      textTransform: "capitalize",
      fontWeight: "bold",
    },
    footer:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:horizontalScale(300),
      marginTop:moderateScale(30)
    },
    footerText:{
      color:"#fff",
      fontSize:moderateScale(20),
      textTransform:"capitalize",
    },
    footerTextContainer:{
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }
  });
  