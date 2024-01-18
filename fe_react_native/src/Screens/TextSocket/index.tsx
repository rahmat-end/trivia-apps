import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TestSocket = () => {
  return (
    <View>
        <Pressable
        onPress={() =>console.log("Play Game")}
        >
      <Text>Play Game</Text>
        </Pressable>
    </View>
  )
}

export default TestSocket

const styles = StyleSheet.create({})