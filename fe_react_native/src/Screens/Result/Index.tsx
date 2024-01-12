import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultMatch = () => {
  return (
    <ImageBackground source={require("../../../assets/BackgroundImage/winnerpage.png")} style={{ flex: 1 }}>
    <View>
      <Text>ResultMatch</Text>
    </View>
    </ImageBackground>
  )
}

export default ResultMatch

const styles = StyleSheet.create({})